const endDate = "25 February 2023 12:10:00 PM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");
/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return; //if time is over the  we use this line so that the time should not go in the negative value

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
