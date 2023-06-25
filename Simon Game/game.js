var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green" , "yellow"];

$("btn").on("click", function(){
    var userChosenColour = $(this).attr("id"); // store the id of the button that got clicked.
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
 } );
   
function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("/sounds" +  name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
       }, 100)
}