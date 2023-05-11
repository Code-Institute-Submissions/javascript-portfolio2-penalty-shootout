const buttons = document.getElementByClassName("control");
const playerScore = document.getElementById("player-score");
const opponentScore = document.getElementById("opponent-score");
const messages = document.getElementById("messages"):
const choices = ["top-left", "mid-left","bottom-left","top-mid","mid-mid","bottom-mid","top-right","mid-right","bottom-right"];

 for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);
        });
    }
            
function playGame(playerChoice){
    let computerChoice = Math.floor(Math.random()* 8) +1;

    let result = CheckWinner(choices[ComputerChoice], choices[palyerChoice]);

    updateScores(result);
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementGoalScore(){
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}
function incrementSavedScore(){
    let oldScore = parseInt(document.getElementById("opponent-score").innerText);
    document.getElementById("opponent-score").innerText = ++oldScore;
}