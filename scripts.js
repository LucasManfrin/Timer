const minutesEl = document.querySelector('div#minutes')
const secondsEl = document.querySelector('div#seconds')
const milisecondsEl = document.querySelector('div#miliseconds')
const startEl = document.querySelector('#startBtn')
const pauseEl = document.querySelector('#pauseBtn')
const resumeEl = document.querySelector('#resumeBtn')
const resetEl = document.querySelector('#resetBtn')

startEl.addEventListener('click', start)
pauseEl.addEventListener('click', pause)
resumeEl.addEventListener('click', resume)
resetEl.addEventListener('click', reset)

let interval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false 

function start() {
    interval = setInterval(() => {

        if(!isPaused) {
            miliseconds += 10

            if (miliseconds===1000) {
                seconds++
                miliseconds = 0
            }
            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatMiliseconds(miliseconds)
        }
    }, 10)

    startEl.style.display = 'none'
    pauseEl.style.display = 'block'
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

function pause() {
    isPaused = true
    resumeEl.style.display = 'block'
    pauseEl.style.display = 'none'
}

function resume() {
   isPaused = false
   resumeEl.style.display = 'none'
   pauseEl.style.display = 'block'
}

function reset() {
    isPaused = false
    clearInterval(interval)

    resumeEl.style.display = 'none'
    pauseEl.style.display = 'none'
    startEl.style.display = 'block'

    miliseconds = 0
    minutes = 0
    seconds = 0

    milisecondsEl.textContent = '000'
    minutesEl.textContent = '00'
    secondsEl.textContent = '00'
}