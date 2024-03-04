let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let m_Container=document.querySelector(".win_msg");
let newBtn=document.querySelector("#new")
let winM=document.querySelector("#winMsg");
let turnO = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const resetGame=()=>{
    enableBoxes();
    turnO=true;
    m_Container.classList.add("hide");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    winM.innerText=`Congrats the Winner is "${winner}"`;
    m_Container.classList.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
       if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
        if(pos1Value===pos2Value && pos2Value===pos3Value){
            showWinner(pos1Value);
        }
     }
    }
}
newBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame)