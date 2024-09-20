let button = document.querySelectorAll('div')
let display = document.getElementById('display')
buttons.addEventListener('click', (e)=>{
    display.innerHTML += e.target.innerText
})


