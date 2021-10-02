const sliders = document.querySelectorAll('.slide')
const container = document.querySelectorAll('.container')

sliders.forEach((item)=>{
  item.addEventListener('click',()=>{
    removeActiveClass()
    item.classList.add('active')
  })
})

function removeActiveClass(){
  sliders.forEach((item)=>{
  
      item.classList.remove('active')
    
  })
}