let userchoice=0;
let compchoice=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#you-score");
const compScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("draw !");
    msg.innerHTML="draw, play again.";
}
const showWinner=(UserWin,userChoice,compChoice)=>{
    if(UserWin){
        userchoice++;
        userScore.innerHTML=userchoice;
    console.log("you win !");
    msg.innerHTML=`you win ! your ${userChoice} beats ${compChoice}`;
    msg.style.background="green";
  }else{
    compchoice++;
    compScore.innerHTML=compchoice;
    console.log("you loose !");
    msg.innerHTML=`you lose ! your ${compChoice} beats ${userChoice} `;
    msg.style.background="red";
  }
}

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    // console.log("Com Choice=",compChoice);

    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let UserWin=true;
        if(userChoice === "rock"){
            // scissors,paper
            UserWin=compChoice=== "paper"? true:false;
        }
        else if( userChoice === "paper"){
            //rock,scissor
            UserWin=compChoice==="scissor" ? false:true;
        }
        else{
            UserWin=compChoice==="scissor"? false : true;
        }
        showWinner(UserWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");        
        console.log("choices was clicked",userChoice);
        playGame(userChoice);

    });
});