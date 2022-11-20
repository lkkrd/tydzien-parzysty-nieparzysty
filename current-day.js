function changeDay() {
  let currDayHeader = document.querySelector(".current-day");
  let day = currentDate.getDate();
  currDayHeader.textContent = `${day}`;
}

function changeWeek() {
  let weekDisplay = document.getElementById("week-display");

  if ([0, 6].includes(currentDate.getDay())) {
    weekDisplay.textContent =
      "Mamy weekend, fuck off, go home, go play, have life, get laid, take a pic of your boobs, send it to me, live life to it's fullest";
    return;
  }

  switch (weekIsEven()) {
    case true:
      weekDisplay.textContent = "Mamy tydzień parzysty";
      break;
    case false:
      weekDisplay.textContent = "Mamy tydzień nieparzysty";
      break;
  }
}

changeDay();
changeWeek();
