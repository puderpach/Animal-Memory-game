let animals = ['Cat.jpg', 'Deer.jpg', 'Dog.jpg', 'Elephant.jpg', 'Lion.jpg', 'Rabbit.jpg', 'RedPanda.jpg', 'Seal.jpg', 'Cat.jpg', 'Deer.jpg', 'Dog.jpg', 'Elephant.jpg', 'Lion.jpg', 'Rabbit.jpg', 'RedPanda.jpg', 'Seal.jpg']
let shufCards;
let cards;

function startGame() {
    switchDivs();
    shufCards = shuffle(animals);
    addListener();
}

function switchDivs() {
    let welcome = document.getElementById("welcome")
    let game = document.getElementById("game")
    welcome.style.display = "none";
    game.style.display = "block";
}

function addListener() {
    cards = document.querySelectorAll(".memory-card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", displayCard);
    }
}

function displayCard() {
    console.log("test");
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// function createObjects(key, value) {
//     for (let i = 0; i < key.length; i++) {
//         key[i].background = value[i];
//     }
// }
