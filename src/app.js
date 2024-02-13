/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Array for suits
  const SUITS = ["Hearts", "Spades", "Clubs", "Diamonds"];

  // Array for card values
  const CARD_VALUES = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King"
  ];

  // Function to generate random suit
  const getRandomSuit = () => {
    return SUITS[Math.floor(Math.random() * SUITS.length)];
  };

  // Function to generate random card value
  const getRandomValue = () => {
    return CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)];
  };

  // Function to generate a random card
  const generateRandomCard = () => {
    const suit = getRandomSuit();
    const value = getRandomValue();

    return { suit, value };
  };

  // Generate and log a random card
  const card = generateRandomCard();
  console.log(`New random card: ${card.value} of ${card.suit}`);
};
