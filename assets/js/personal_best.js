(function(win) {
    function renderPersonalBestTable(body, scores) {
        for (var i = 0; i < scores.length; i++) {
            var score = scores[i];
            const tableRow = document.createElement('tr');
            const columnOne = document.createElement('td');
            const columnTwo = document.createElement('td');
            tableRow.appendChild(columnOne);
            tableRow.appendChild(columnTwo);
            columnOne.innerText = score.score;
            columnTwo.innerText = score.lastTimePlayed;
            body.appendChild(tableRow);
        }
    }
    win.saveData = function saveData(score, lastTimePlayed) {
        let existingGamesPlayed = JSON.parse(win.localStorage.getItem('game'));
        if (!existingGamesPlayed) {
            existingGamesPlayed = [];
        }

        existingGamesPlayed.push({
            score,
            lastTimePlayed
        });
        win.localStorage.setItem('game', JSON.stringify(existingGamesPlayed));
    };
    win.loadData = function loadData() {
        let existingGamesPlayed = JSON.parse(win.localStorage.getItem('game'));
        if (!existingGamesPlayed) {
            existingGamesPlayed = [];
        }
        const table = document.getElementById("per_best");
        renderPersonalBestTable(table, existingGamesPlayed);
    };
})(window);