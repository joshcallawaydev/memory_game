
(function personalBest() {
    function renderPersonalBestTable(body, scores) {
        // this will present some space and render a table
        for (var i = 0; i < scores.length; i++) {
            var score = scores[i];
            // create table row, chuck data in
            const tableRow = document.createElement('tr');
            const columnOne = document.createElement('td');
            const columnTwo = document.createElement('td');
            tableRow.appendChild(columnOne);
            tableRow.appendChild(columnTwo);
            columnOne.innerText = score.score;
            columnTwo.innerText = score.lastTimePlayed;
            body.appendChild(tableRow);
        }
    };
    window.saveData = function saveData(score, lastTimePlayed) {
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
    };
    window.loadData = function loadData() {
        //extracts data from local Storage and creates an object
        let existingGamesPlayed = JSON.parse(window.localStorage.getItem('game'));
        if (!existingGamesPlayed) {
            existingGamesPlayed = [];
        }
        // load scores on page
        const table = document.getElementById("per_best");
        renderPersonalBestTable(table, existingGamesPlayed);
        };
})(window);