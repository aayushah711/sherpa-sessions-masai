var isTimerRunning = false;
var isTimerFired = false;
var timer;
var timeRemaining;

window.onload = function() {
    var toggle = document.getElementById('toggleTimer');
    var reset = document.getElementById('resetTimer');

    toggle.addEventListener('click', handleToggle);
    reset.addEventListener('click', handleReset);
};

function getTime() {
    var hr = Number(document.getElementById('hr').value);
    var mins = Number(document.getElementById('mins').value);
    var secs = Number(document.getElementById('secs').value);

    return secs + mins * 60 + hr * 60 * 60;
}

function handleToggle() {
    if (!isTimerRunning) {
        if (!isTimerFired) {
            var str = getTimeFormat(getTime());
            renderTime(str);
            isTimerFired = true;
            timeRemaining = getTime();
        }
        startTimer();
    } else {
        pauseTimer();
    }
}

function startTimer() {
    isTimerRunning = true;
    timer = setInterval(function() {
        if (timeRemaining === 0) {
            handleReset();
        }
        var str = getTimeFormat(timeRemaining);
        renderTime(str);
        timeRemaining--;
    }, 1000);
    event.target.textContent = 'STOP';
}

function renderTime(str) {
    var div = document.getElementById('timer');
    div.textContent = str;
}
function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timer);
    event.target.textContent = 'START';
}

function handleReset() {
    clearInterval(timer);
    timeRemaining = 0;
    isTimerRunning = false;
    isTimerFired = false;
    document.getElementById('toggleTimer').textContent = 'START';
    var str = getTimeFormat(getTime());
    renderTime(str);
}

function getTimeFormat(seconds) {
    var sec = seconds % 60;
    var min = Math.floor(seconds / 60) % 60;
    var hr = Math.floor(seconds / (60 * 60));

    var str = hr + 'hr : ' + min + 'm : ' + sec + 's';
    return str;
}
