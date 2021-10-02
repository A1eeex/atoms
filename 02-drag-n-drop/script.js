const placeholder = document.querySelectorAll('.placeholder')
const item = document.querySelector('.item')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(e) {
  e.target.classList.add('hold')
    setTimeout(()=>{
      e.target.classList.add('hide')
    })

}

function dragend(e) {
  // e.target.classList.remove('hold','hide')
  e.target.className  = 'item'
}

placeholder.forEach((item)=>{
item.addEventListener('dragover',dragover )
item.addEventListener('dragenter', dragenter)
item.addEventListener('dragleave',dragleave)
item.addEventListener('drop',drop)
})

function dragover (e){
  e.preventDefault()
}
function dragenter (e){
  console.log('dragenter')
  e.target.classList.add('hovered')
  
}
function dragleave (e){
  e.target.classList.remove('hovered')
  
}
function drop (e){
  e.target.classList.remove('hovered')
  
  e.target.append(item)
}