let countdown
const buttons = document.querySelectorAll('[data-time]')
const timerDisplay = document.querySelector('.display__time-left')

const changeColor = red => document.documentElement.style.setProperty('background',
  `linear-gradient(45deg,
    #${red ? 'f5424e' : '42a5f5'} 0%,
    #${red ? 'cb2a23' : '478ed1'} 50%,
    #${red ? 'a1230d' : '0d47a1'} 100%
  )`
)

const timer = secs => {
  clearInterval(countdown)
  changeColor()
  timerDisplay.classList.remove('timer__end')
  const now = Date.now()
  const then = now + secs * 1000
  displayTime(secs)

  countdown = setInterval(() => {
    const left = Math.round((then - Date.now()) / 1000)
    left <= 0 && (timerDisplay.classList.add('timer__end') || changeColor(true))
    displayTime(left)
  }, 1000)
}

const pad = s => (`00${s}`).slice(-2)

const displayTime = secs => {
  const mins = Math.floor(secs / 60)
  const remainder = secs % 60
  const display = `${pad(mins)}:${pad(remainder < 0 ? remainder * -1 : remainder)}`
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
