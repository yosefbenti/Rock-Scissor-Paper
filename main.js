const playerIntput = document.getElementById("playerInput");
const userChoice = document.getElementById("userChoice");
const drawBtn = document.getElementById("draw");
const newGame = document.getElementById("newGame");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const winner = document.getElementById("winner");

const computerGuess = document.getElementById("computerGuess");
const playerGuess = document.getElementById("playerGuess")

let computerGss = Math.random() * 10;


let playerDraw;
let computerDraw;


let playerCount = 0;
let computerCount = 0;

let finalWinner;


drawBtn.addEventListener("click", drawGuess)


function drawGuess() {
    finalWinner = "";
    newGame.disabled = true;
    drawBtn.disabled = false ;
         


    if (computerGss <= 3)
    {
        //computerDraw = 1;
        computerDraw = "Rock"
    }

    else if (computerGss > 3 && computerGss <= 6)
    {
        //computerDraw = 2;
        computerDraw = "Seissor"
    }
    else
    {
        //computerDraw = 3;
        computerDraw = "Paper"
    }


    //playerDraw = parseInt(playerInput.value);
    playerDraw = userChoice.value;


    computerGuess.textContent = computerDraw;
    playerGuess.textContent = playerDraw;

    computerGss = Math.random() * 10;
    play();


   

}

function play() {
    if (computerDraw == playerDraw) {
        computerCount = computerCount + 0;
        playerCount = playerCount + 0;
    }
    else if (computerDraw == 'Rock' && playerDraw == 'Seissor') {
        computerCount++;
    }
    else if (computerDraw == 'Seissor' && playerDraw == 'Paper') {
        computerCount++;
    }
    else if (computerDraw == 'Paper' && playerDraw == 'Rock') {
        computerCount++;
    }
    

    else if (playerDraw == 'Rock' && computerDraw == 'Seissor') {
        playerCount++;
    }
    else if (playerDraw == 'Seissor' && computerDraw == 'Paper') {
        playerCount++;
    }
    else if (playerDraw == 'Paper' && computerDraw == 'Rock') {
        playerCount++;
    }

    computerScore.textContent = computerCount;
    playerScore.textContent = playerCount;

    if (playerCount == 3 || computerCount == 3)
        gameWinner();


}
function gameWinner() {
    if (playerCount == 3 && computerCount < 3) {
        finalWinner = "player";
    }
    else if (playerCount < 3 && computerCount == 3) {
        finalWinner = "computer";
    }

    

    winner.textContent = `The winner of the game is : ${finalWinner}`;
    //resetGame();
    newGame.disabled = false;
    drawBtn.disabled = true ;
    newGame.addEventListener("click",resetGame);
}
function resetGame() {
    computerDraw = 0;
    playerDraw = 0;
    computerCount = 0;
    playerCount =0;
    drawBtn.disabled = false ;
    newGame.disabled = true;
    computerGuess.textContent = "";
    playerGuess.textContent = "";
    winner.textContent = "";
    computerScore.textContent = "";
    playerScore.textContent = "";
    //playerIntput.value = "";
    userChoice.value = "";
}