let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newGamebtn");
let msgContainer = document.querySelector(".msg-container")
 
let turnO = true; // playerX, playerO

// these are the pattern of winning when a player acquires all 3 position of any one of these patttern.
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// for playing Game, condtions are checked
boxes.forEach((box) => {
   box.addEventListener("click", () =>{

    if(turnO){ // for playerO turn
        box.innerText = "O";
        turnO = false;
    }
    else{ // for PlayerX turn
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();

   });
});

// box should be disabled after winner is concluded
const disabledBoxes =() =>{
    for(let box of boxes){
       box.disabled = true;
    }
}

// box should be enabled after we reset game or after new game start
const enabledBoxes =() =>{
    for(let box of boxes){
       box.disabled = false;
       box.innerText ="";
    }
    msgContainer.classList.add("hide");
}

const ShowWinner =(winner) =>{
    msg.innerText = `Congratulations!! Winner is ${winner}🎉🥳`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText; 
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                ShowWinner(pos1Val);
            }
        }
    }
}

const resetGame =() =>{
    turnO = true;
    enabledBoxes();
}

// we are adding event on buuton to make it functionable
newBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame)
 