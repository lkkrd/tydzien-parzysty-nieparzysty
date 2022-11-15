const currDayHeader = document.querySelector(".current-day");

function changeDayHeader() {
  currDayHeader.textContent = `${day}`;
}

changeDayHeader();
