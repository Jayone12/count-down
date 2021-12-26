const newYears = '1 Jan 2022';

const dayEl = document.querySelector('#day');
const hourEl = document.querySelector('#hour');
const minsEl = document.querySelector('#minute');
const secEl = document.querySelector('#second');

function countDown() {
 const newYearsDate = new Date(newYears);
 const currentDate = new Date();

 const diffDay = (newYearsDate - currentDate) / 1000; // 두 날짜를 밀리초 단위로 계산하여 차이를 구한다.
 const days = Math.ceil(diffDay / 3600 /  24); // 밀리초 단위로 구한 값에서 시간(60분) * 분(60) * 하루(24)을 나눈다.
 const hours = Math.ceil(diffDay / 3600) % 24; // 밀리초 단위로 구한 값에서 시간(60분) * 분(60)을 나누고 24시간으로 나눈 나머지 값을 구한다.
 const mins = Math.ceil(diffDay / 60) % 60;
 const seconds = Math.ceil(diffDay) % 60;

 dayEl.innerText = days;
 hourEl.innerText = doubleDigit(hours);
 minsEl.innerText = doubleDigit(mins);
 secEl.innerText = doubleDigit(seconds);

 function doubleDigit(time) {
  return time < 10 ? `0${time}` : time;
 }

}

setInterval(countDown, 1000);