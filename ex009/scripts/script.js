let button = document.querySelectorAll('div')
let display = document.getElementById('display')
buttons.addEventListener('click', (e)=>{
    if (e.target.innerText == 'C') {
        display.innerText = ''
    } else if(e.target.innerText == 'backspace'){
        display.innerText = display.innerText.substring(0, display.innerText.length - 1)
    }
    else{
        display.innerHTML += e.target.innerText
    }
    console.log(e.currentTarget)
})


// animationTarget.style.animation = "";
// setTimeout(() => animationTarget.style.animation = "ResizeButtonAnimation .1s linear");