let userScore = 0;
let compScore = 0;

const choic = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")

userScorePara = document.querySelector("#user-score")
compScorePara = document.querySelector("#comp-score")


const gencompChoice = ()=>{
    const options = ["rock" , "paper" , "scissor"];
    const rdnIdx = Math.floor(Math.random()*3)
    return options[rdnIdx];
}

const drawGame = ()=>{
    console.log("Game is draw please play again")
    msg.innerText = "Game Draw"
    msg.style.backgroundColor = "#081b31"
}

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){// if userWin is still true then user has won
        userScore++;
        userScorePara.innerHTML= userScore;
        msg.innerText = ` You Win! Your${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"

    }
    else{
        compScore++
        compScorePara.innerHTML = compScore;
        msg.innerText = ` You lose! ${compChoice} beats Your${userChoice}`
        msg.style.backgroundColor = "red"


    }
}

const playGame = (userChoice)=>{
console.log("User choice =",userChoice);

    const compChoice = gencompChoice();
    console.log("Comp choice =",compChoice);

    if(userChoice === compChoice){
drawGame();
    }
    else{
        let userWin = true ;
        if(userChoice === "rock"){ // toh comp wala rock nhi choose kar sakta nhi toh draw ho jayega upper wala method
            userWin = compChoice ==="paper"?false : true;
        }
        else if(userChoice === "paper"){
            // rock or scissor
            userWin = compChoice === "scissor"?false : true;
        }
        else{
            // rock or paper == scissor ke liye h
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}



choic.forEach((choice)=>{
     let userChoice = choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    })
})
