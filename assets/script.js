//Initialize variables
let i = 0;
let score = 0;
let secondsLeft = 60;
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");
let storedScores;
let scoreList = [];
const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const answerFour = document.getElementById("answerFour");

// Show time left on page.  If time is up then, alert the user that time is up.
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's Up");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}

// When time is up or user has answered all the questions, display the score and prompt to user to submit their name in HighScore or Play again.
function questionEnder() {

    const scoreTag = document.createElement("h1");
    const inputTag = document.createElement("input");
    const submitButton = document.createElement("button");
    const playAgainButton = document.createElement("button");
    
    score += secondsLeft;
    if (score <= 0 ) {
        score = 0;
    }

    document.getElementById("question").textContent = "Game Over!";
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    document.body.children[1].appendChild(scoreTag);

    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.getElementById("score").setAttribute("class", "row");
    document.getElementById("score").setAttribute("class", "text-center");
    document.body.children[1].appendChild(inputTag);

    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    document.getElementsByTagName("input")[0].placeholder = "Your Name for Highscore";
    // document.getElementsByTagName("input")[0].setAttribute("value", "Unknown");

    submitButton.textContent = "Submit";
    submitButton.setAttribute("class", "btn btn-primary mr-1")
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        saveScores(highScoreText);
        window.location.href = "highscores.html";
    });

    playAgainButton.textContent = "Play Again";
    playAgainButton.setAttribute("class", "btn btn-primary")
    document.body.children[1].appendChild(playAgainButton);
    playAgainButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });
}

//Code to display the question and answers for the user to select.
function questionInit() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

// Save the Highscores to Local Storage.
function saveScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

document.getElementById("startButton").addEventListener("click", questionInit);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});

// Determine which answer is clicked.  From there look at the questions array to determine if correct.  If wrong, subtract 10 seconds from the number of seconds left.
answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionInit();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionInit();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionInit();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionInit();
})
