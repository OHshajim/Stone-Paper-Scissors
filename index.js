const options = document.querySelectorAll('.pic')
const WinOutput = document.getElementById("win-text")
const myScore = document.getElementById("my-score");
const cmScore = document.getElementById("cm-score");
let win = 1 ;
let lose =1 ;

// computer chose
const computerChose = () => {
    const option = ["Stone", "Paper", "Scissors"]
    const index = Math.floor(Math.random() * 3);
    return option[index]
};

const drawGame = () => {
    WinOutput.innerText = "Game draw , Play again" ;
    console.log("game draw");
};

const ShowWinner = (userWin,Id ,computer) => {
    if (userWin) {
        console.log("you win");
        WinOutput.innerText = `You win ! Your ${Id} beat the ${computer}`
        myScore.innerText = win ;
        win++ ;
    }
    else {
        console.log("you lose");
        WinOutput.innerText = ` loser !!! the ${computer} beat Your ${Id}`
        cmScore.innerText = lose ;
        lose++ ;
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
        // stone
        if (Id === "Stone") {
            userWin = computer === "Paper" ? false : true;
        }

        // paper
        else if (Id === "Paper") {
            userWin = computer === "Scissors" ? false : true;
        }

        // scissor
        else {
            userWin = computer === "Stone" ? false : true;
        }

        ShowWinner(userWin,Id ,computer);
    };
};


// click part
options.forEach((option) => {
    option.addEventListener("click", function () {
        const choseID = option.getAttribute("id")        
        gamePlay(choseID)
    })
}); 