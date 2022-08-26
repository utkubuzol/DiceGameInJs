// birinci zar 
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
/*
1. randdomNumber1 adında değişken tanımladım onu darandom methodunda tanımladım
2.  0-0.999999999 aralığında gelen randomu 6 ile çarparak  0 - 5.9999 aralığına tanımladım.
3. Math.floor() methodu ondalıklı sayıları tam sayıya yuvarlar   0 - 5 .
4. +1 ekleyerek istenen random aralığına geldim 1-6.
*/
var randomDiceImage = "dice" + randomNumber1 + ".png";// rastgele dice1.png - dice6.png arasında image adı gelicek.

var randomImageSource = "images/" + randomDiceImage; //image kaynağından random image gelicek    images/dice1.png - images/dice6.png

var image1= document.querySelectorAll("img")[0];  // img i seçip ilkine girmek için [0] indeksini belirttim. sonra image1 olarak tanımladım.

image1.setAttribute("src", randomImageSource);  //image attribute u "src" taginde ve "," koyarak ne ile değiştireceğimi belirttik.

 // ikinci zar
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //Bu şekilde de setAttribute kullanılabilr.

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!";
}
else {
    document.querySelector("h1").innerHTML = "Draw :/";
}
