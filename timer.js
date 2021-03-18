var timerDuration = 60;
var timeLeft = timerDuration;

var timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timer);
    }

    document.getElementById("timer_text").innerHTML = timeLeft;
    timeLeft -= 1;
}, 1000);
