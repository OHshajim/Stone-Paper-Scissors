const options = document.querySelectorAll('.pic')

options.forEach((option) => {
    option.addEventListener("click", function () {
        console.log(option);
        option.classList.add('border-orange-800')
        const choseID = option.getAttribute("id")
        console.log(choseID);
    })
}); 