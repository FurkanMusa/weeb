const colors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$(document).on("keydown", function(event) {
    if (event.key === " ") {
        nextSequence();
    } else if (event.key === "1") {
        console.log("1");
    } else if (event.key === "2") {
        console.log("2");
    } else if (event.key === "3") {
        console.log("3");
    } else if (event.key === "4") {
        console.log("4");
    }
});


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});


$(".start").click(function() {
    $(".menu-overlay").addClass("invisible");
    $("#level-title").text("Level 1");
    setTimeout(function(){ nextSequence(); }, 1000);
});

$(".nope-overlay").click(function() {
    playSound("no");
});

function generateRandomColor() {
  return colors[Math.floor(Math.random() * 4)];
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var newColor = generateRandomColor();
    gamePattern.push(newColor);

    // Hile:
    console.log(gamePattern);

    $(".nope-overlay").removeClass("blockOverlay");
    playAllSequence();
}

async function playAllSequence() {
    let waitTime = 5000 / level;
    if (waitTime < 200) { waitTime = 200; }
    if (waitTime > 800) { waitTime = 800; }

    for (let i = 0; i < gamePattern.length; i++) {
        let currentColor = gamePattern[i];
        $("#" + currentColor).addClass("pressed");
        playSound(currentColor);
        setTimeout(function(){ $("#" + currentColor).removeClass("pressed"); }, 200);

        if (i < gamePattern.length - 1) {
            await new Promise(r => setTimeout(r, waitTime));
        }
    }

    setTimeout(function(){ $(".nope-overlay").addClass("blockOverlay"); }, 200);


}

function checkAnswer(lastClickedIndex) {
    if (gamePattern[lastClickedIndex] === userClickedPattern[lastClickedIndex]) {
        if (userClickedPattern.length === gamePattern.length) {
            playSound("correct");
            // no click if click villager sound
            
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        restart();
    }
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
    } else if (name == "wrong") {
        var wrong = new Audio("sounds/death.mp3");
        wrong.play();
    } else if (name == "correct") {
        var correct = new Audio("sounds/correct.mp3");
        correct.play();
    } else if (name == "no") {
        var one = new Audio("sounds/villagerangry.mp3");
        one.play();
    }
}


function restart() {

    $("#level-title").html("Game Over<br>Level " + level);

    $("body").addClass("game-over");
    $(".btn").addClass("disabled");

    setTimeout(function() {
        $("body").removeClass("game-over");
        $(".btn").removeClass("disabled");
        $(".start").text("Restart");
        $(".menu-overlay").removeClass("invisible");
    }, 1000);
    
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    
}
