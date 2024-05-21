const snake = document.getElementById("snake");
let marginT = 0;
let marginL = 0;
const food = document.getElementById("food");
const totalScore = document.getElementById("score"); 
let score = 0;
let snakeSize = 7;



document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    let rotation = 0; // Initialize rotation variable

    if (e.keyCode == '38') { // Up arrow key
        console.log("up key pressed");
        marginT -= 1;
        rotation = 90; // Rotate the snake 90 degrees
        snake.style.marginTop = `${marginT}vh`;
    }

    else if (e.keyCode == '40') { // Down arrow key
        console.log("down key pressed");
        marginT += 1;
        rotation = 90; // Rotate the snake 90 degrees
        snake.style.marginTop = `${marginT}vh`;
    }

    else if (e.keyCode == '39') { // Right arrow key
        console.log("Right key pressed");
        marginL += 0.5;
        rotation = 0; // Keep the snake straight
        snake.style.marginLeft = `${marginL}vw`;
    }

    else if (e.keyCode == '37') { // Left arrow key
        console.log("left key pressed");
        marginL -= 0.5;
        rotation = 0; // Keep the snake straight
        snake.style.marginLeft = `${marginL}vw`;
    }

    // Apply rotation transformation
    snake.style.transform = `rotate(${rotation}deg)`;
}





function checkCollision() {
    let snakeRect = snake.getBoundingClientRect();
    let foodRect = food.getBoundingClientRect();

    // Check for collision
    if (snakeRect.right > foodRect.left &&
        snakeRect.left < foodRect.right &&
        snakeRect.bottom > foodRect.top &&
        snakeRect.top < foodRect.bottom) {
            
food.style.marginTop = Math.floor(Math.random()*101) + "vh";
food.style.marginLeft = Math.floor(Math.random()*101) + "vw";

score += 1;
totalScore.textContent = "Score: " + score;

snakeSize +=1;
snake.style.width = `${snakeSize}vw`;


        console.log('Collision detected!');

        }


    }


    setInterval (checkCollision,100);




