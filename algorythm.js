const trzyDni = 86400000 * 3;
const date = new Date();
const x = Date.now() - trzyDni;
const y = 604800000;
const i = Math.floor(x / y);
const smthToChange = document.querySelector(".smth-to-change");

function tydzParzysty() {
  console.log("tydzien parzysty");
  smthToChange.style.color = "lightgreen";
  smthToChange.style.backgroundColor = "blue";
}

function tydzNieparzysty() {
  smthToChange.style.color = "yellow";
  smthToChange.style.backgroundColor = "red";
  console.log("tydzien nieparzysty");
}

function whatDay() {
  if (i % 2 == 0) {
    tydzParzysty();
    return;
  }
  tydzNieparzysty();
  return;
}
