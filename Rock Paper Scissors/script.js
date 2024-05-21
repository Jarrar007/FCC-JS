let options = ["👊", "✌️", "✋"];
let compScore = 0;
let player = {
    name: prompt("Enter your name: "),
    score: 0
}
let compChoice;





let compOption = document.getElementById("comp-choice");
let playerOption = document.getElementById("player-choice");
let result = document.getElementById("result");
let compData = document.getElementById("comp-score");
compData.textContent = "Computer: " + compScore;

let playerData = document.getElementById("player-score");
playerData.textContent = player.name + ": " + player.score;

function rand() {

    let random = options[Math.floor(Math.random() * 3)];
    return random;
}

function emoji() {

    if (compChoice == "👊") {
        compOption.textContent = "👊";
    }

    else if (compChoice == "✌️") {
        compOption.textContent = "✌️";
    }

    else {
        compOption.textContent = "✋";
    }
}

function rock() {

    compChoice = rand();
    emoji();
    playerOption.textContent = "👊";

    if (compChoice == "👊") {
        result.textContent = "It's a draw!";
    }

    else if (compChoice == "✌️") {
        result.textContent = "You have won!";
        player.score += 1;
        playerData.textContent = player.name + ": " + player.score;

    }

    else {
        result.textContent = "You have lost!";
        compScore += 1;
        compData.textContent = "Computer: " + compScore;

    }
}

function paper() {

    compChoice = rand();
    emoji();
    playerOption.textContent = "✋";

    if (compChoice == "✋") {
        result.textContent = "It's a draw!";
    }

    else if (compChoice == "👊") {
        result.textContent = "You have won!";
        player.score += 1;
        playerData.textContent = player.name + ": " + player.score;

    }

    else {
        result.textContent = "You have lost!";
        compScore += 1;
        compData.textContent = "Computer: " + compScore;

    }
}


function scissors() {

    compChoice = rand();
    emoji();
    playerOption.textContent = "✌️";

    if (compChoice == "✌️") {
        result.textContent = "It's a draw!";
    }

    else if (compChoice == "✋") {
        result.textContent = "You have won!";
        player.score += 1;
        playerData.textContent = player.name + ": " + player.score;

    }

    else {
        result.textContent = "You have lost!";
        compScore += 1;
        compData.textContent = "Computer: " + compScore;

    }
}