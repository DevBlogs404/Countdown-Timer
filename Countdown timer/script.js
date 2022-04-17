let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');


let newYears = "1 Jan 2023";

function countdown() {

    let newYearsDate = new Date(newYears);
    let currentDate = new Date();
    
    let totalseconds= new Date(newYearsDate - currentDate) / 1000;
     
    let days = Math.floor(totalseconds / 3600 / 24);
    let hours = Math.floor(totalseconds / 3600 % 24);
    let minutes = Math.floor(totalseconds / 60 % 60);
    let seconds = Math.floor(totalseconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);

