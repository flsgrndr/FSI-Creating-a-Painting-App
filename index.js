let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

let paletteColor = document.querySelector('.painting')