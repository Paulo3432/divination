const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");
    console.log(inputNumber.value);

    if (Number(inputNumber.value) === randomNumber) {
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`;

        const playAgainButton = document.querySelector(".screen2 button");
        playAgainButton.addEventListener("click", resetGame);
    }

    xAttempts++;
}

function resetGame() {
    document.querySelector(".screen2").classList.add("hide");
    document.querySelector(".screen1").classList.remove("hide");
    document.querySelector("#inputNumber").value = "";
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}
