// Multiply the required seconds by 10 to allow the timer to run in 100 ms intervals for better responsiveness in tab-change detection.
var TIMER_DURATION = 60 * 10;

function startTimer(callback) {
    var timeLeft = TIMER_DURATION;

    var timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            callback(true);
        }

        // As the time is multiplied by 10 for responsiveness, divide it by 10 again for accurate display in seconds.
        document.getElementById("timer_text").innerHTML = Math.ceil(timeLeft / 10);
        timeLeft -= 1;

        if (!document.hasFocus()) {
            clearInterval(timer);
            callback(false);
        }
    }, 100);
}

startTimer((timerCompleted) => {
    if (timerCompleted) {
        document.getElementById("status").innerHTML = "Timer Finished!";
    } else {
        document.getElementById("status").innerHTML = "Timer Interrupted!";
    }
});
