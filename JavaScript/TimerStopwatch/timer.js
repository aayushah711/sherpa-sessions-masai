var isRunning = false;
var isFired = false;
var timeRemaining = 0;
var timer;

window.onload = function() {
    var toggle = document.getElementById('toggleTimer');
    var reset = document.getElementById('resetTimer');

    toggle.addEventListener('click', handleToggle);
    reset.addEventListener('click', resetTimer);
};

function handleToggle() {
    if (!isRunning) {
        if (!isFired) {
            isFired = true;
            timeRemaining = getTime();
        }
        startTimer();
    } else {
        pauseTimer();
    }
}

function startTimer() {
    event.target.textContent = 'STOP';
    isRunning = true;
    timer = setInterval(function() {
        if (timeRemaining === 0) {
            resetTimer();
        }
        renderTime(getTimeFormat());
        timeRemaining--;
    }, 1000);
}

function getTime() {
    var hr = Number(document.getElementById('hr').value);
    var min = Number(document.getElementById('min').value);
    var sec = Number(document.getElementById('sec').value);
    return sec + min * 60 + hr * 60 * 60;
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    event.target.textContent = 'START';
}

function resetTimer() {
    clearInterval(timer);
    isFired = false;
    isRunning = false;
    timeRemaining = getTime();
    renderTime(getTimeFormat());

    document.getElementById('toggleTimer').textContent = 'START';
}

function renderTime(str) {
    var div = document.getElementById('timerStr');
    div.textContent = str;
}

function getTimeFormat() {
    var sec = timeRemaining % 60;
    var min = Math.floor(timeRemaining / 60) % 60;
    var hr = Math.floor(timeRemaining / (60 * 60)) % 60;
    return hr + 'hr : ' + min + 'min : ' + sec + 'sec';
}
