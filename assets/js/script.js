document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "football") {
                alert("You clicked football!");
          } else {
              let gameType = this.getAttribute("data-type");
              alert(`You clicked ${gameType}`);
          }
        });
    }
});
runGame(){

}
checkAnswer(){

}
calculateCorrectAnswer(){

}
incremntGoalScore(){

}
incrementSavedScore(){

}
