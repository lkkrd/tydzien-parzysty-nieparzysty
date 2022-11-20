const currentDate = new Date();

function weekIsEven() {
  let threeDays = 86400000 * 3;
  //we will use it to set timeCount
  let timeCount = Date.now() - threeDays;
  //timeCount is how many ms passed sice 1st monday of 1st week
  let weekDuration = 604800000;
  //weekDuration is how many ms is in whole week
  let weekCount = Math.floor(timeCount / weekDuration);
  //weekCount is how many weeks passed since 1st monday

  if (weekCount % 2 == 0) {
    return true;
  }
  return false;
}

function callWeek() {
  switch (weekIsEven()) {
    case true:
      console.log("tydzien parzysty");
      break;
    case false:
      console.log("tydzien nieparzysty");
      break;
  }
  return;
}
