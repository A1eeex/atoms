const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const colors = ['#FF0000', '#00ECFF', '#00FF17', '#FFD500', '#EC00FF', '#FF003A', '#FFFFFF']

let time = 0
let score = 0
startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }

})
board.addEventListener('click', (e => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
}))

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {

        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your result <span class="primary">${score}</span> `
}

function createRandomCircle() {
    const color = getRandomColor()
    const circle = document.createElement('div')

    const size = getRandomNumber(8, 60)
    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size - 30)
    const y = getRandomNumber(0, height - size - 30)

    circle.classList.add('circle')

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
