//Initialize variables

const highScoreList = document.querySelector("#highScores");
const backButton = document.querySelector("#go-back");
const clearScores = document.querySelector("#clear-highscores");

initScores();

// Initialize Highscores Page of all highscores stored in Local Storage
function initScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores();
}

//Clear all of the Highscores out of Local Storage
function clearAll() {
    window.localStorage.clear();
}

// Display all the Scores and the names associated with it
function renderScores() {
    if (storedScores !== null) {
        scoreList.sort(function (x, y) {
            return x.newScore - y.newScore;
        });
        scoreList.reverse(function (x, y) {
            return x.newScore - y.newScore
        })

        for (i = 0; i < scoreList.length; i++) {
            let scoreListItem = scoreList[i];
            let tr = document.createElement("tr");
            let nameCell = document.createElement("td");
            let nameCellText = document.createTextNode(scoreListItem.name);
            let scoreCell = document.createElement("td");
            let scoreCellNum = document.createTextNode(scoreListItem.newScore);

            tr.setAttribute("tr-index", i);
            document.getElementById("highScores").appendChild(tr);
            tr.appendChild(nameCell);
            nameCell.appendChild(nameCellText);
            tr.appendChild(scoreCell);
            scoreCell.appendChild(scoreCellNum);

        }
    }
}

// Code for the buttons if they are clicked.
clearScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "highScores.html";
})
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})
