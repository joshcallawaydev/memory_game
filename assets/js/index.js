(function(win) {

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

let grid = document.querySelector(".grid");
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

function stopTimer() {
    clearInterval(downloadTimer);
    seconds = 0;
}

function startTimer() {
    downloadTimer = setInterval(function () {
        document.getElementById("timer").textContent = seconds++;
        if (timer === 60) {
            stopTimer();
            alert("You have run out of time");
        }
    }, 1000);
}

function replay() {
    const name = document.getElementById("fname-index").value;
    if (!name || name.length < 2) {
        alert("Please enter your name");
        return;
    }

    popup.style.display = "none";
    clickBoard.innerHTML = "0";
    cardsWon = 0;
    clicks = 0;
    grid.innerHTML = "";
    startTimer();

    createBoard(grid, cardArray);
    arrangeCard();

    image = document.querySelectorAll("img");
    Array.from(image).forEach(img =>
        img.addEventListener("click", flipCard)
    );
}

function createBoard(grid, array) {
    for (var i = 0; i < array.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "assets/images/Pokemon_Card.jpeg");
        img.setAttribute("data-id", i);
        grid.appendChild(img);
    }
}

function arrangeCard() {
    cardArray.sort(() => 0.5 - Math.random());
}

function flipCard() {
    let selected = this.dataset.id;
    let clicked = cardArray[selected].name;
    cardsSelected.push(clicked);


    cardsId.push(selected);
    this.classList.add("flip");
    this.setAttribute("src", cardArray[selected].img);
    if (cardsId.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    let imgs = document.querySelectorAll("img");
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {

        cardsWon += 1;
        setTimeout(checkWon, 500);
    } else {
        imgs[firstCard].setAttribute("src", "assets/images/Pokemon_Card.jpeg");
        imgs[secondCard].setAttribute("src", "assets/images/Pokemon_Card.jpeg");
        imgs[firstCard].classList.remove("flip");
        imgs[secondCard].classList.remove("flip");
    }
    cardsSelected = [];
    cardsId = [];
    clicks += 1;
    clickBoard.innerHTML = clicks;
}

function checkWon() {
    if (cardsWon == cardArray.length / 2) {
        const score = seconds;
        win.saveData(score, new Date().toUTCString());

        stopTimer();
        alert("Congratulations, you won");
        setTimeout(() => popup.style.display = "flex", 300);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    win.loadData();
    playAgain.addEventListener("click", replay);
    startGame.addEventListener("click", function (e) {
        e.preventDefault();
        replay();
    });
});

})(window);