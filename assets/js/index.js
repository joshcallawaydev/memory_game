// cards

let cardArray = [{
        name: "bulbasaur",
        img: "assets/images/bulbasaur.png",
    },
    {
        name: "bulbasaur",
        img: "assets/images/bulbasaur.png",
    },
    {
        name: "charizard",
        img: "assets/images/charizard.png",
    },
    {
        name: "charizard",
        img: "assets/images/charizard.png",
    },
    {
        name: "pikachu",
        img: "assets/images/pikachu.png",
    },
    {
        name: "pikachu",
        img: "assets/images/pikachu.png",
    },
    {
        name: "pokeball",
        img: "assets/images/pokeball.png",
    },
    {
        name: "pokeball",
        img: "assets/images/pokeball.png",
    },
    {
        name: "ash",
        img: "assets/images/ash.png",
    },
    {
        name: "ash",
        img: "assets/images/ash.png",
    },
    {
        name: "squirtle",
        img: "assets/images/squirtle.png",
    },
    {
        name: "squirtle",
        img: "assets/images/squirtle.png",
    },
];

//define variables and get DOM element

let grid = document.querySelector(".grid");
let source = document.querySelector("#source")
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let startGame = document.querySelector("#submit-start");
let clickBoard = document.querySelector(".clickBoard");
let image;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;
let seconds = 0;
let timer = 0;
let downloadTimer;


document.addEventListener("DOMContentLoaded", function () {
//define functions 

createBoard(grid, cardArray); 
arrangeCard();
playAgain.addEventListener("click", replay); 

//add a click function for images 

imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img => 
img.addEventListener("click", flipCard)
) 
});

//createBoard function

function createBoard(grid, array) { 
popup.style.display = "none"; 
array.forEach((arr, index) => { 
let img = document.createElement("img"); 
img.setAttribute("src", "assets/images/Pokemon_Card.jpeg");
img.setAttribute("data-id", index); 
grid.appendChild(img); 
})
}

// arrangeCard function

function arrangeCard() { 
cardArray.sort(() => 0.5 - Math.random())
}

// flip Card function

function flipCard() { 
let selected = this.dataset.id;
cardsSelected.push(cardArray[selected].name); 
cardsId.push(selected); 
this.classList.add("flip"); 
this.setAttribute("src", cardArray[selected].img); 
if (cardsId.length === 2) { 
setTimeout(checkForMatch, 500);
} 
}

// checkForMatch function

function checkForMatch() { 
let imgs = document.querySelectorAll("img"); 
let firstCard = cardsId[0];
let secondCard = cardsId[1];
if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
alert("you have found a match"); 
cardsWon += 1; 
scoreBoard.innerHTML = cardsWon; 
setTimeout(checkWon,500) 
} else { 
imgs[firstCard].setAttribute("src", "blank.png");
imgs[secondCard].setAttribute("src", "blank.png"); alert("wrong, please try again"); imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
} 
cardsSelected = []; 
cardsId = []; 
clicks += 1; 
clickBoard.innerHTML = clicks; 
}

function checkWon() {
if (cardsWon == cardArray.length / 2) {
alert("You won") 
setTimeout(()=> popup.style.display = "flex" ,300); 
}
}

// The replay function

function replay() { 
arrangeCard(); 
grid.innerHTML = "";
createBoard(grid, cardArray);
cardsWon = 0;
clicks = 0; 
clickBoard.innerHTML = 0; 
scoreBoard.innerHTML = 0; 
popup.style.display = "none"; 
}