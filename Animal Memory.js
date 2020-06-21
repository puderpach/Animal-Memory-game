function startGame() {
    switchDivs();
}

function switchDivs() {
    let welcome = document.getElementById("welcome")
    let game = document.getElementById("game")
    welcome.style.display = "none";
    game.style.display = "block";
}

let cards = document.getElementsByClassName("memory-card");
console.log(cards.length);
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
}

function displayCard() {
    console.log("test");
}