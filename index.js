const hourEl = document.getElementById("hour"); //hour Element
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
// const millisecEl = document.getElementById("milliseconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours(); //getHours is method so () dont forget it
  let m = new Date().getMinutes();
  let s = new Date().getSeconds(); //as hour min and seconds will be changing we took variable
  //   let ms = new Date().getMilliseconds();
  let ampm = "AM"; //Am default going to check it later

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //   ms = ms < 10 ? "0" + ms : ms;
  //highlight+ctrl+d->to select all similar text horizontally and replace only at once
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  //   millisecEl.innerText = ms;
  ampmEl.innerText = ampm;

  /* to call function updateClock() at every second so clock or seconds changes continuouly  we can use  setTimeout method */
  /*setTimeout sets a timer that execute a function after the timer expires*/
  // setTimeout has two parameters one is function and 2 is timer in milliseconds 1000->1sec
  //so just after 1 sec we call updateClock function
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
