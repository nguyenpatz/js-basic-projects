const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const desc = document.querySelector(".desc");
const myNum = document.querySelectorAll(".num");
console.log(myNum);

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

desc.firstElementChild.textContent = `Giveaway Ends on ${weekday}, ${date} ${month} ${year} ${hour}:${min} `;

const futureTime = futureDate.getTime();

// if item < 10 => add 0 on first line
/*
example: 4 < 10 => 04
 */
function format(item) {
  if (item < 10) {
    return `0${item}`;
  }

  return item;
}

function remainderTime() {
  const dayTime = new Date().getTime();
  let t = futureTime - dayTime;

  // day = 24 * 60 * 60 * 1000;
  // 24 is 1 day
  // 60 is 1 hour
  // 60 is 1 min
  // 1000 is 1 second

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSec = 1000;
  // time remainder: total time divine one day

  // get hour and minute
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute);
  let secs = Math.floor((t % oneMinute) / oneSec);
  // console.log(hours);
  // console.log(min);
  // console.log(secs);

  const values = [days, hours, mins, secs];

  myNum.forEach(function (elem, index) {
    elem.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
  }
}

let countdown = setInterval(remainderTime, 1000);
remainderTime();
