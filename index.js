// Generates Sound Output Based on Input
function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();     
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();     
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();     
            break;                                  
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();     
            break;        
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();     
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();     
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();     
            break;

        default:
            console.log(key);
}
}

// Button Animation Function
function animateButton(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    // To add a delay and revert the CSS property back to initial State without .pressed class
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// CLICK EVENT TYPE

for (var i=0; i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var buttonInnerHTML = this.innerHTML;
        
        // Audio Output
        makeSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });

}

// KEYBOARD EVENT TYPE

// event variable passed indicates which keypress trigerred the event 
document.addEventListener("keydown",function(event){
    // AUDIO O/P
    makeSound(event.key);
    animateButton(event.key);
});