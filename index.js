const options = document.querySelectorAll('.pic')
const WinOutput = document.getElementById("win-text")
// computer chose
const computerChose = () => {
    const option = ["Stone", "Paper", "Scissors"]
    const index = Math.floor(Math.random() * 3);
    return option[index]
};

const drawGame = () => {
    WinOutput.innerText = "game draw"
    console.log("game draw");
};

const ShowWinner = (userWin) => {
    if (userWin) {
        console.log("you win");
        WinOutput.innerText = "my sweet wife win thats why ummmmmmmmmmmmmmmmma !!!"
    }
    else {
        console.log("you lose");
        WinOutput.innerText = "Tasnim Alo  loser "
    }
};

const gamePlay = (Id) => {
    console.log("user chose :", Id);

    const computer = computerChose()
    console.log("computer chose :", computer);

    // conditions
    if (Id === computer) {
        drawGame()
    }
    else {
        let userWin = true
        if (Id === "Stone") {
            userWin = computer === "Paper" ? false : true;
        }
        else if (Id === "Paper") {
            userWin = computer === "Scissors" ? false : true;
        }
        else {
            userWin = computer === "Stone" ? false : true;
        }

        ShowWinner(userWin);
    };
};



options.forEach((option) => {
    option.addEventListener("click", function () {
        // console.log(option);
        option.classList.add('border-orange-800')
        const choseID = option.getAttribute("id")

        gamePlay(choseID)
    })
}); 