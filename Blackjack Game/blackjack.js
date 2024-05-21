let player = {

    name : prompt("Enter Your Name: "),
    chips : 145
}

// let playerName = prompt("Enter Your Name: ");
// let chips = 145;

let arr = [];

let hasBlackjack = false;
let isAlive = false;

let message;

var sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let name = document.getElementById("player-el");

name.textContent = player.name + ": " + "$" + player.chips;



function rand() {

    let random = Math.floor(Math.random() * 13) + 1;

    if (random == 1) {

        return 11;
    }

    else if (random > 10) {

        return 10;

    }

    else {

        return random;
    }



}



function conditions() {


    if (sum <= 20) {

        message = "Do you want to draw another card?";
        isAlive = true;
        hasBlackjack = false;


    }

    else if (sum === 21) {

        message = "Congrats! You've got blackjack!";
        hasBlackjack = true;
        isAlive = true;
        player.chips += 50;
        name.textContent = player.name + ": " + "$" + player.chips;



    }

    else {

        message = "You're out of the game!";
        isAlive = false;
        hasBlackjack = false;
        player.chips -= 10;
        name.textContent = player.name + ": " + "$" + player.chips;


    }

}

function startGame() {

    let firstCard = rand();

    let secondCard = rand();


    sum = firstCard + secondCard;
    arr = [firstCard, secondCard]


    isAlive = true;


    renderGame();
}




function renderGame() {



    conditions();


    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: ";


    for (i = 0; i < arr.length; i++) {

        cardsEl.textContent += arr[i] + " ";

    }

}


function newCard() {

    if (hasBlackjack == false && isAlive == true) {

        let thidCard = rand();
        sum += thidCard;
        arr.push(thidCard);

        renderGame();

    }

}





