const date = new Date();
const currentDay = [(day = date.getDate()), (month = date.getMonth())];
const parzyste = {
  listopad: "[2, 3, 4, 14, 15, 16, 17, 18, 28, 29, 30]",
  grudzien: "[1, 2, 12, 13, 14, 15, 16]",
  styczen: "[9, 10, 11, 12, 13, 23, 24, 25, 26, 27]",
};

const smthToChange = document.querySelector(".smth-to-change");

function tydzParzysty() {
  smthToChange.style.color = "lightgreen";
  smthToChange.style.backgroundColor = "blue";
}

function tydzNieparzysty() {
  smthToChange.style.color = "yellow";
  smthToChange.style.backgroundColor = "red";
}

//pętla do sprawdzania czy tydzień jest parzysty czy nie
if (![5, 6].includes(date.getDay())) {
  switch (month) {
    case 10:
      if (parzyste.listopad.includes(day)) {
        console.log("tydzień parzysty");
        tydzParzysty();
      } else {
        console.log("tydzień nieparzysty");
        tydzNieparzysty();
      }
      break;
    case 11:
      if (parzyste.grudzien.includes(day)) {
        console.log("tydzień parzysty");
        tydzParzysty();
      } else {
        console.log("tydzień nieparzysty");
        tydzNieparzysty();
      }
      break;
    case 0:
      if (parzyste.styczen.includes(day)) {
        console.log("tydzień parzysty");
        tydzParzysty();
      } else {
        console.log("tydzień nieparzysty");
        tydzNieparzysty();
      }
      break;
  }
} else {
  console.log("jest weekend");
}
