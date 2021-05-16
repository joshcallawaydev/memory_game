
table = document.querySelector("#per_Best");

window.personalBest = {
    renderPersonalBestTable(scores) {
        // this will present some space and render a table
        for (var i = 0; i < scores.length; i++) {
            var score = scores[i];
            // create table row, chuck data in
            createTableRow(score)
        }
    },
    saveData(score, lastTimePlayed) {
        // save data localstorage
        let existingGamesPlayed = JSON.parse(window.localStorage.getItem('game'));
        if (!existingGamesPlayed) {
            existingGamesPlayed = [];
        }

        existingGamesPlayed.push({
            score,
            lastTimePlayed
        });
        window.localStorage.setItem('game', JSON.stringify(existingGamesPlayed));
    },
    loadData() {
        myScore = document.getElementById("per_best").innerHTML = window.localStorage.getItem('game');
    }
}

/*
var person = {name:"John", age:30, city:"New York"};

document.getElementById("per_best").innerHTML = window.localStorage.getItem('game');

document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;

let extractScore = window.localStorage.getItem('game');
        let renderScore = extractScore.substr(10, 2);
        document.getElementById("per_best").innerHTML = renderScore;


get from localstorage
var games = window.localStorage.getItem("games");
document.getElementById("fname-index").value = yourName;
document.createElement("li").innerHTML.display = yourName;
*/