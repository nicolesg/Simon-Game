var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColors[randomNumber];
var randomNumber = Math.floor(Math.random() * 4);

gamePattern.push(randomChosenColour);

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);

}

var selectButtonId = $("#" + randomChosenColour);

console.log(selectButtonId  + "this is the button");