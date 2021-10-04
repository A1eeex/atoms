const board = document.querySelector('#board')
const colors = ['#FF0000', '#00ECFF', '#00FF17', '#FFD500', '#EC00FF', '#FF003A','#FFFFFF']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))

    square.addEventListener('mouseleave', () =>
        removeColor(square))


    board.append(square)
}

function setColor(e){
  const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(e){
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}