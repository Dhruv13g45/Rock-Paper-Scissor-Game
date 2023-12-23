let userscore = 0;
let compscore = 0;
const optionArray = ["rock", "paper", "scissor"];
let options = document.querySelectorAll(".option");
let userScoreDisp = document.querySelector("#user_score");
let compScoreDisp = document.querySelector("#comp_score");
let winnerDisp = document.querySelector("#disp-winner");
let resetgame = document.querySelector(".resetbtn");

options.forEach(choice => {
    choice.addEventListener("click", () => {
        let userchoiceId = choice.getAttribute("id");
        let randomnum = Math.floor(Math.random() * 3);
        console.log(randomnum);
        let computerChoice = optionArray[randomnum];

        if (userchoiceId === computerChoice) {
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "Its a Draw";
        }
        else if (userchoiceId === "rock" && computerChoice === "scissor") {
            userscore++;
            userScoreDisp.textContent = userscore;
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "user is winner";
        }
        else if (userchoiceId === "rock" && computerChoice === "paper") {
            compscore++;
            compScoreDisp.textContent = compscore;
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "computer is winner";

        }
        else if (userchoiceId === "paper" && computerChoice === "scissor") {
            compscore++;
            compScoreDisp.textContent = compscore;
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "computer is winner";

        }
        else if (userchoiceId === "paper" && computerChoice === "rock") {
            userscore++;
            userScoreDisp.textContent = userscore;
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "user is winner";
        }
        else if (userchoiceId === "scissor" && computerChoice === "rock") {
            compscore++;
            compScoreDisp.textContent = compscore;
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "computer is winner";

        }
        else if (userchoiceId === "scissor" && computerChoice === "paper") {
            userscore++;
            userScoreDisp.textContent = userscore;
            winnerDisp.classList.remove("hide");
            winnerDisp.textContent = "User is the winner";
        }

    })
});


resetgame.addEventListener("click" , ()=>{
    winnerDisp.textContent = null;
    winnerDisp.classList.add("hide");
    userscore = 0;
    compscore = 0
    userScoreDisp.textContent = userscore;
    compScoreDisp.textContent = compscore;
})