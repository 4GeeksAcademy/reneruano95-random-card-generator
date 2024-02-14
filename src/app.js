/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Array for suits
  const suits = ["spade", "club", "heart", "diamond"];

  // Array for card values
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const generateRandomSuit = () => {
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    return suits[randomSuitIndex];
  };

  const generateRandomNumber = () => {
    const randomValueIndex = Math.floor(Math.random() * values.length);
    return values[randomValueIndex];
  };

  document.querySelector(".card").classList.add(generateRandomSuit());

  document.querySelector(".card").innerHTML = generateRandomNumber();
};
