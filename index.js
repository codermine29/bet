var randomNumber1 = Math.floor((Math.random() * 2 + 1));

// Change coin images
document.getElementsByClassName("img1")[0].setAttribute("src", "images/coin" + randomNumber1 + ".png");

// Change title
if (randomNumber1 == "1") {
  document.querySelector("h1").innerHTML = "Heads";
} else  {
  document.querySelector("h1").innerHTML = "Tails";
}
