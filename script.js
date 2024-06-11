let boxes = document.querySelectorAll(".box");
let resetbut = document.querySelector(".reset");
let msg = document.querySelector(".message");
let msgcontainer = document.querySelector(".msgcontainer");
let newbut = document.querySelector(".newbtn")

let turnO = true;
let count = 0;



let wincases = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () => {
    turnO =  true;
    enableButtons();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
            count++;
        }
        else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableButtons = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableButtons = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const noWin = () =>{
    msg.innerText = "Its a Draw";
    msgcontainer.classList.remove("hide");
    disableButtons();
}
 
const showWinner = (winner) => {
    msg.innerText = `Congrats Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableButtons();
}
const checkWinner = () => {
    for(let cases of wincases){
        let pos1Val = boxes[cases[0]].innerText;
        let pos2Val = boxes[cases[1]].innerText;
        let pos3Val = boxes[cases[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
            if(count==9){
                noWin();
            }
        }
    }
}
newbut.addEventListener("click",resetGame);
resetbut.addEventListener("click",resetGame);
console.log(count);
count = 0;