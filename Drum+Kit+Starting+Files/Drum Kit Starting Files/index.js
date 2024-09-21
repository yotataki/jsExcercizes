function soundByKey(letterPressed){
    switch (letterPressed) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3'); // Matches crash.png image
            audio.play();
            break;
    
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3'); // Matches kick.png image
            audio.play();
            break;
    
        case 's':
            var audio = new Audio('sounds/snare.mp3'); // Matches snare.png image
            audio.play();
            break;
    
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3'); // Matches tom1.png image
            audio.play();
            break;
    
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3'); // Matches tom2.png image
            audio.play();
            break;
    
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3'); // Matches tom3.png image
            audio.play();
            break;
    
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3'); // Matches tom4.png image
            audio.play();
            break;
    
        default:
            console.log(letterPressed);
            break;
    }
}

var drumButtons = document.querySelectorAll(".drum");

for (let index = 0; index < drumButtons.length; index++) {
    
    drumButtons[index].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        soundByKey(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function (event) {
    soundByKey(event.key);
});


