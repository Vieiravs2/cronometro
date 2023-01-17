// Variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let cron;
const cronStart = document.querySelector('#start')
const cronPause = document.querySelector('#pause')
const cronReset = document.querySelector('#reset')
const hoursDOM = document.querySelector('#hora');
const minutesDOM = document.querySelector('#minutos');
const secondsDOM = document.querySelector('#segundos');
const millisecondsDOM = document.querySelector('#milisegundos');

// Events and Codes

cronStart.addEventListener('click', function() {
  pause();
  cron = setInterval( () => { timer(); }, 10)
});

function pause() {
  clearInterval(cron);
}

cronPause.addEventListener('click', pause);

cronReset.addEventListener('click', function(){
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hoursDOM.innerText = '00';
  minutesDOM.innerText = '00';
  secondsDOM.innerText = '00';
  millisecondsDOM.innerText = '00';
})

function timer() {
  if ((milliseconds += 10) === 1000) {
    milliseconds = 0;
    seconds += 1
  }
  if (seconds == 60) {
    seconds = 0;
    minutes += 1
  }
  if (seconds == 60) {
    seconds = 0;
    minutes += 1
  }
  if (minutes == 60) {
    minutes = 0;
    hours += 1
  }
  hoursDOM.innerText = returnData(hours);
  minutesDOM.innerText = returnData(minutes)
  secondsDOM.innerText = returnData(seconds)
  millisecondsDOM.innerText = returnData(milliseconds)
}

function returnData(input) {
  return input > 10 ? input : `0${input}` 
}