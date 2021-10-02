


function slider(count) {
  const sliders = document.querySelectorAll('.slide')
  sliders[count].classList.add('active')
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
}
slider(1)