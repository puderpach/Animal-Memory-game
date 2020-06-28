let animals = ['Images/Cat.jpg', 'Images/Deer.jpg', 'Images/Dog.jpg', 'Images/Elephant.jpg', 'Images/Lion.jpg', 'Images/Rabbit.jpg', 'Images/RedPanda.jpg', 'Images/Seal.jpg', 'Images/Cat.jpg', 'Images/Deer.jpg', 'Images/Dog.jpg', 'Images/Elephant.jpg', 'Images/Lion.jpg', 'Images/Rabbit.jpg', 'Images/RedPanda.jpg', 'Images/Seal.jpg']
let shufCards;
let cards;
let currentCards = [];


function startGame() {
    switchDivs();
    shufCards = shuffle(animals);
    loadCards();
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
    if (currentCards.length === 1) {
        if ((card + currentCards[0]).style.backgroundImage !== (card + currentCards[1]).style.backgroundImage) {
            (card + currentCards[0]).style.backgroundImage = 'url("Images/Background.jpg"'
            (card + currentCards[1]).style.backgroundImage = 'url("Images/Background.jpg"'
        }
    }
}

function displayCard(cardNumber) {
    switch (cardNumber) {
        case 1: card1.style.backgroundImage = "url(" + animals[0] + ")";
            break;
        case 2: card2.style.backgroundImage = "url(" + animals[1] + ")";
            break;
        case 3: card3.style.backgroundImage = "url(" + animals[2] + ")";
            break;
        case 4: card4.style.backgroundImage = "url(" + animals[3] + ")";
            break;
        case 5: card5.style.backgroundImage = "url(" + animals[4] + ")";
            break;
        case 6: card6.style.backgroundImage = "url(" + animals[5] + ")";
            break;
        case 7: card7.style.backgroundImage = "url(" + animals[6] + ")";
            break;
        case 8: card8.style.backgroundImage = "url(" + animals[7] + ")";
            break;
        case 9: card9.style.backgroundImage = "url(" + animals[8] + ")";
            break;
        case 10: card10.style.backgroundImage = "url(" + animals[9] + ")";
            break;
        case 11: card11.style.backgroundImage = "url(" + animals[10] + ")";
            break;
        case 12: card12.style.backgroundImage = "url(" + animals[11] + ")";
            break;
        case 13: card13.style.backgroundImage = "url(" + animals[12] + ")";
            break;
        case 14: card14.style.backgroundImage = "url(" + animals[13] + ")";
            break;
        case 15: card15.style.backgroundImage = "url(" + animals[14] + ")";
            break;
        case 16: card16.style.backgroundImage = "url(" + animals[15] + ")";
            break;
    }
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function loadCards() {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const card4 = document.getElementById("card4");
    const card5 = document.getElementById("card5");
    const card6 = document.getElementById("card6");
    const card7 = document.getElementById("card7");
    const card8 = document.getElementById("card8");
    const card9 = document.getElementById("card9");
    const card10 = document.getElementById("card10");
    const card11 = document.getElementById("card11");
    const card12 = document.getElementById("card12");
    const card13 = document.getElementById("card13");
    const card14 = document.getElementById("card14");
    const card15 = document.getElementById("card15");
    const card16 = document.getElementById("card16");
}

// function createObjects(key, value) {
//     for (let i = 0; i < key.length; i++) {
//         key[i].background = value[i];
//     }
// }

// function addListener() {
//     cards = document.querySelectorAll(".memory-card");
//     for (let i = 0; i < cards.length; i++) {
//         cards[i].addEventListener("click", displayCard);
//     }
// }
