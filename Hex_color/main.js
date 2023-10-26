"use strict";

const btnClickMe = document.querySelector(".btn-primary");
// let a = 0;

function clickHandler() {
  let hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexcode = "";
  for (let i = 0; i < 6; ++i) {
    let random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode += hex_numbers[random_index];
  }
  document.getElementById("hex-code").innerHTML = hexcode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
  //   ++a;
  //   console.log(a);
  //   if (a == 3) btnClickMe.removeEventListener("click", clickHandler);
}

btnClickMe.addEventListener("click", clickHandler);
