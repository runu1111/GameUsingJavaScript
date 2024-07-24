let userScore=0;
let ComputerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");


const drawGame=()=>{
 msg.innerText="Game was draw ,play again";
}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win. ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    }
    else{
        ComputerScore++;
        compScorePara.innerText= ComputerScore;
         msg.innerText="You lose";
         msg.style.backgroundColor="red";
    }
    }
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
        msg.style.backgroundColor="#081b31";
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userWin=compChoice==="paper"?true:false;
        }
    showWinner(userWin,userChoice, compChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
    });

});
