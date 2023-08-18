var randomNumber1 = Math.floor(Math.random()*6) + 1; //random number between 1 and 6

var randomDiceImage ="dice" + randomNumber1 + ".png"; //randomImage generator between dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage;  //images/dice1.png to images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6) + 1; //random number between 1 and 6

var randomImageSource2 = "images/dice" + randomNumber2 +".png";  //images/dice1.png to images/dice6.png

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}