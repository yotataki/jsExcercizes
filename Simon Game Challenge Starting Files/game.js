var button_colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level = 0;
var currentGamePatternIndex = 0;

function soundByColor(color) {
    var sound = new Audio('sounds/' + color + '.mp3');
    setTimeout(() => {
        sound.play();
    }, 500);
    
}


function pressAnimationAndSound(color){

    soundByColor(color);
    
    animatePress(color);
}

function animatePattern(Pattern){
    for (let i = 0; i< Pattern.length; i++) {

        setTimeout(() => {
            pressAnimationAndSound(Pattern[i]);
        }, 500);
      
       
    }
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 500);
}

// changes the h1 to show level 0
function startGame() {
    level = 0;
    $("h1").text("level " + level);
}

// changes the h1 to show level up
function levelUp() {
    level ++;
    $("h1").text("level " + level);
    
}

function nextSequence(){
    levelUp();
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = button_colors[randomNumber];
    gamePattern.push(randomChosenColor);
    animatePattern(gamePattern);
    console.log("game pattern:" + gamePattern);
    

}

function boolCheckAnswer(gameColor, playerColor) {
    if(gameColor == playerColor){
        return true;
    }
    else{
        return false;
    }
}




//click handler
$(".btn").click(function () { 
    var userChosenColour = this.id;  // Get the id of the clicked button
    animatePress(userChosenColour);
    if(!boolCheckAnswer(gamePattern[currentGamePatternIndex], userChosenColour)){//checking if the button press is the same color as the color the game picked
        console.log("userChosenColour:" + userChosenColour + "!=" + gamePattern[currentGamePatternIndex]);
        $("h1").text("false");
        console.log("false");
    }
    else{
        currentGamePatternIndex++;
        console.log("currentGamePatternIndex" + currentGamePatternIndex);
        if (level == currentGamePatternIndex -1 ) {//cheking to see if it's last turn
            currentGamePatternIndex = 0;
            console.log("last turn");
            setTimeout(() => {
                nextSequence();
            }, 1000);
            
        }
    }



            
    
    
    
    
});

$(document).keydown(function () { 
    if (gamePattern.length == 0) {
        nextSequence();
        startGame();
    }
    
});






