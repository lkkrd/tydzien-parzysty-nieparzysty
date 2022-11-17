const date = new Date();
const currentDay = [(day = date.getDate()), (month = date.getMonth())];
const parzyste = {
  listopad: "[2, 3, 4, 14, 15, 16, 17, 18, 28, 29, 30]",
  grudzien: "[1, 2, 12, 13, 14, 15, 16]",
  styczen: "[9, 10, 11, 12, 13, 23, 24, 25, 26, 27]",
};

const dniWolne = [];

const smthToChange = document.querySelector(".smth-to-change");

//definiujemy funkcje, które będą nam zmieniać snthToChange
//pozniej je przywołamy w fucnkji ustawTydzien
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

//funkcja sprawdza, czy jest tydzien parzysty, nieparzysty i woła nam funkcje, które zmieniają kolor
function ustawTydzien(day, month) {
  if ([5, 6].includes(day)) {
    console.log("jest weekend, fuck off");
    return;
  }

  if (dniWolne.includes(currentDay)) {
    console.log("jest dzien wolny, fuck off as well, go have life");
    return;
  }

  switch (month) {
    case 10:
      if (parzyste.listopad.includes(day)) {
        tydzParzysty();
      } else {
        tydzNieparzysty();
      }
      break;
    case 11:
      if (parzyste.grudzien.includes(day)) {
        tydzParzysty();
      } else {
        tydzNieparzysty();
      }
      break;
    case 0:
      if (parzyste.styczen.includes(day)) {
        tydzParzysty();
      } else {
        tydzNieparzysty();
      }
      break;
  }
}

ustawTydzien(day, month);
