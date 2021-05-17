let seconds = 0;
let tens = 0;
let interval;

let btn_start = document.querySelector('#start');
let btn_stop = document.querySelector('#stop');
let btn_reset = document.querySelector('#reset');

let appendSeconds = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');

btn_start.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

btn_stop.onclick = () => {
    clearInterval(interval);
}

btn_reset.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}

function startTimer() {
    tens++;

    tens < 9 ? appendTens.innerHTML = '0' + tens : appendTens.innerHTML = tens

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + tens;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}