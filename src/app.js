/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

window.onload = function() {
  //write your code here
  //Generate the const of cards
  const cardNumber = [
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
  //Generate the const of suits
  const deckSuits = ["♦", "♥", "♠", "♣"];
  //Change color of diamons and hearths
  deckSuits[0] = '<span style="color:red;">' + deckSuits[0] + "</span>"; // Diamonds
  deckSuits[1] = '<span style="color:red;">' + deckSuits[1] + "</span>"; // Hearths
  //Generate random number with array length
  function generateRandomNumber(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  //
  //
  //
  //
  //
  //
  //
  //
};
