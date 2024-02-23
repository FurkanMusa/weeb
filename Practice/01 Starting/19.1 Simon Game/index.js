
const colors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).on("keydown", function(event) {
    if (event.key === "1") {
        console.log("1");
    } else if (event.key === "2") {
        console.log("2");
    } else if (event.key === "3") {
        console.log("3");
    } else if (event.key === "4") {
        console.log("4");
    }
});



function generateRandomColor() {
  return buttonColours[Math.floor(Math.random() * 4)];
}

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var newColor = generateRandomColor();
  gamePattern.push(newColor);
  $("#" + newColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(newColor);
}

function playSound(name) {
    if (name == colors[0]) {
        var red = new Audio("sounds/red.mp3");
        red.play();
    } else if (name == colors[1]) {
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
    } else if (name == colors[2]) {
        var green = new Audio("sounds/green.mp3");
        green.play();
    } else if (name == colors[3]) {
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
    }
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    // animatePress(userChosenColour);
    // checkAnswer(userClickedPattern.length - 1);
});