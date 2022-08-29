function updateTimer() {
  var d = document.querySelector(".days .val");
  var h = document.querySelector(".hours .val");
  var m = document.querySelector(".minutes .val");
  var s = document.querySelector(".seconds .val");

  let timeDiff = new Date("19 Nov, 2022") - new Date();

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  d.textContent = days < 10 ? `0${days}` : days;
  h.textContent = hours < 10 ? `0${hours}` : hours;
  m.textContent = minutes < 10 ? `0${minutes}` : minutes;
  s.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(updateTimer, 1000);
