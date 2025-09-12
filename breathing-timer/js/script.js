let setTime;
let timeInterval;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");

// Calculate Start Timer 

const startTimer = (value) => {
    let counter = value
        timeInterval = setInterval( () => {

        const minutes = parseInt(counter / 60);
        const seconds = parseInt(counter % 60);
        const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.innerText = `${displayMinutes}:${displaySeconds}`

        if(-- counter < 0){
            clearInterval(timeInterval)
            timerDisplay.innerText = "Breath Out"

            setTimeout(()=>{
                timerDisplay.innerText = "Breath In"
                startTimer(setTime);
            }, 3000)
        }

    }, 1000)
}

// Calculate Stop Timer 

const stopTimer = () => {
    clearInterval(timeInterval)
    timerDisplay.innerText = "Breath In"
    isRunning = false;

}



startButton.addEventListener("click", () => {
    if(!isRunning){
        setTime = 15;
        startTimer(setTime);
        isRunning = true;
    }
})


stopButton.addEventListener("click", () => {
    stopTimer();
    isRunning = false;
})



