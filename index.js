const options = document.querySelectorAll('.pic')

// computer chose
const computerChose = () => {
    const option = ["Stone","Paper","Scissors"]
    const index = Math.floor(Math.random()*3);
    return option[index]
}

const gamePlay =(Id) =>{
    console.log("user chose :", Id);
    const computer = computerChose()
    console.log("computer chose :", computer);
}


options.forEach((option) => {
    option.addEventListener("click", function () {
        // console.log(option);
        option.classList.add('border-orange-800')
        const choseID = option.getAttribute("id")

        gamePlay(choseID)
    })
}); 