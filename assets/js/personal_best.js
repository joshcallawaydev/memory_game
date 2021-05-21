
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

        // load scores on page
        myScore = document.getElementById("per_best").innerText = window.localStorage.getItem('game');
    }
}