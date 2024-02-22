/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //
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

  //
  const generateRandomCard = () => {
    const suit = generateRandomSuit();
    const value = generateRandomNumber();

    return { suit, value };
  };

  const updateCard = () => {
    const card = generateRandomCard();
    document.querySelector(".card").classList.remove(...suits);
    document.querySelector(".card").classList.add(card.suit);
    document.querySelector(".card").innerText = card.value;
  };

  let timer;
  let timerStatus = "stopped";

  // Start/stop timer function
  const startStopTimer = () => {
    if (timerStatus === "stopped") {
      timer = setInterval(updateCard, 2000); //2s
      timerStatus = "started";
      document.querySelector("#start-stop-timer").innerText = "Stop Timer";
    } else {
      clearInterval(timer);
      timerStatus = "stopped";
      document.querySelector("#start-stop-timer").innerText = "Start Timer";
    }
  };

  // Generate a new card and update the webpage
  const newCard = () => {
    updateCard();
  };

  document.querySelector("#new-card").addEventListener("click", newCard);
  document
    .querySelector("#start-stop-timer")
    .addEventListener("click", startStopTimer);
};
