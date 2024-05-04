let msg = document.querySelector("#msg");
let bd = document.querySelector("body")
let Uscore = document.querySelector("#user-score")
let Cscore = document.querySelector("#comp-score")
let choices = document.querySelectorAll(".choice")
let userScore = 0;
let compScore = 0;
let getcompChoice = () => {
    arr = ["rock", "paper", "scissor"]
    randIdx = Math.floor(Math.random() * 3);
    return arr[randIdx]
}
 //for draw
 let draw = () => {
    console.log("its Draw")
    msg.innerHTML ="It's draw";
    bd.style.backgroundColor = "bisque" 
}
let playgame = (user) => {
    console.log("User choice = ", user)
    let compChoice = getcompChoice();
    console.log("Comp Choice = ", compChoice)
    if (user == compChoice) {
        draw();
    }
    else{
        let userwin = true
        if (user == "rock") {
            userwin = compChoice == "paper" ? false : true;
        }
        else if (user == "paper") {
            userwin = compChoice == "stone" ? true : false;
        }
        else {
            userwin = compChoice == "rock" ? false : true;
        }
    
    //for winning condition
    
    let showWinner = (winning) => {
        if (winning == true) {
            console.log("You won")
            msg.innerHTML=`You Won..! ${user} beats ${compChoice}`
            bd.style.backgroundColor = "green"
            userScore++;
            let myscore = userScore;
            console.log(myscore)
            Uscore.innerHTML = myscore;
        }
        else  {
            console.log("You Lose")
            msg.innerHTML=`You Lose..! ${compChoice} beats ${user}`
            bd.style.backgroundColor = "red"
            compScore++;
            Cscore.innerHTML = compScore;
        }
    }
    showWinner(userwin);
}
   
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})