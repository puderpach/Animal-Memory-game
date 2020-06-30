let animals = ['Images/Cat.jpg', 'Images/Deer.jpg', 'Images/Dog.jpg', 'Images/Elephant.jpg', 'Images/Lion.jpg', 'Images/Rabbit.jpg', 'Images/RedPanda.jpg', 'Images/Seal.jpg', 'Images/Cat.jpg', 'Images/Deer.jpg', 'Images/Dog.jpg', 'Images/Elephant.jpg', 'Images/Lion.jpg', 'Images/Rabbit.jpg', 'Images/RedPanda.jpg', 'Images/Seal.jpg']
let shuffledCards;
let cards = [];
let currentCards = [];

function startGame() {
    switchDivs();
    shuffledCards = shuffle(animals);
    assignCards();
}

function switchDivs() {
    let welcome = document.getElementById("welcome")
    let game = document.getElementById("game")
    welcome.style.display = "none";
    game.style.display = "block";
}

function checkCards(cardNumber) {
    displayCard(cardNumber);
    currentCards.push(cardNumber)
    if (currentCards.length === 2) {
        if (cards[currentCards[0]].style.backgroundImage !== cards[currentCards[1]].style.backgroundImage) {
            setTimeout(() => {
                cards[currentCards[0]].style.backgroundImage = 'url("Images/Cards.jpg"';
                cards[currentCards[1]].style.backgroundImage = 'url("Images/Cards.jpg"';
                currentCards = [];
            }, 1000);
        }
    }
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function assignCards() {
    cards = document.getElementsByClassName('memory-card');
    // for(let i=0; i<cards.length; i++) {
    //     cards[i].style.backgroundImage = `url(${animals[i]})`;
    // }
}

function displayCard(number) {
    cards[number].style.backgroundImage = `url(${animals[number]})`;
}