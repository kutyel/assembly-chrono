let countdown
const buttons = document.querySelectorAll('[data-time]')
const timerDisplay = document.querySelector('.display__time-left')

const timer = secs => {
  clearInterval(countdown)
  timerDisplay.classList.remove('timer__end')
  const now = Date.now()
  const then = now + secs * 1000
  displayTime(secs)

  countdown = setInterval(() => {
    const left = Math.round((then - Date.now()) / 1000)
    left <= 0 && timerDisplay.classList.add('timer__end')
    displayTime(left)
  }, 1000)
}

const displayTime = secs => {
  const mins = Math.floor(secs / 60)
  const remainder = secs % 60
  const display = `${mins}:${remainder < 10 ? '0' : ''}${remainder}`
  timerDisplay.textContent = display
  document.title = display
}

function startTimer () {
  timer(+this.dataset.time)
}

function setMinutes (e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
}

buttons.forEach(b => b.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', setMinutes)
