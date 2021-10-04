const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

const slideCount = mainSlide.querySelectorAll('div').length

let activeIndex = 0

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upButton.addEventListener('click', () => {
  changeSlide('up')
})

downButton.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown',(e)=>{
 if(e.key === 'ArrowUp'){
   changeSlide('up')
 } else if(e.key === 'ArrowDown'){
    changeSlide('down')
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeIndex++
    if (activeIndex === slideCount) {
      activeIndex = 0
    }
  } else if (direction === 'down') {
    activeIndex--
    if (activeIndex < 0) {
      activeIndex = slideCount - 1
    }
  }

const height = container.clientHeight

mainSlide.style.transform = `translateY(-${activeIndex * height}px)`
sidebar.style.transform = `translateY(${activeIndex * height}px)`
}