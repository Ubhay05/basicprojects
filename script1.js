let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");


 const genCompChoice = () => {
    let comparr = ["rock","paper","scissors"]
    let compGen =  Math.floor(Math.random()*3);
    return comparr[compGen];
 } 
 const drawGame = () => {
    msg.innerText = "Its a Draw Play again";
    msg.style.backgroundColor = "#081b31";

 }
 const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = "you Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = "you Lose";
        msg.style.backgroundColor = "red";
    }

 }

const playGame = (userChoice) => {
    console.log(userChoice);
    let compChoice=genCompChoice();
    console.log(compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        if(userChoice=="rock"){
            let userWin = true;
            userWin = compChoice == "paper"? false : true ;
            showWinner(userWin);
        }
        else if(userChoice=="paper"){
            let userWin = true;
            userWin = compChoice == "scissors"? false : true ;
            showWinner(userWin);
        }
        else{
            let userWin = true;
            userWin = compChoice == "rock"? false : true ;
            showWinner(userWin);
        }
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});