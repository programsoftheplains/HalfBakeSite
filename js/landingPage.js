/* Logo + Text Toggle Queries */

document.querySelector('#logoToggle').addEventListener('mouseover', onHoverLogo)
document.querySelector('#logoToggle').addEventListener('mouseout', offHoverLogo)

document.querySelector('#secondToggle').addEventListener('mouseover', onHoverLogo)
document.querySelector('#secondToggle').addEventListener('mouseout', offHoverLogo)

const logoM = document.querySelector('#logoMain')
const logoS = document.querySelector('#logoSecond')
const voidText = document.querySelector('#secondToggle')

function onHoverLogo(){
    logoM.classList.add('hide')
    logoS.classList.toggle('hide')
    voidText.style.color= 'red';
}

function offHoverLogo(){
    logoM.classList.remove('hide')
    logoS.classList.add('hide')
    voidText.style.color='white';
}


/* Left Hover Toggles */

document.querySelector('#hoverL').addEventListener('mouseover', onHoverLeft)
document.querySelector('#hoverL').addEventListener('mouseout', offHoverLeft)

const switchL = document.getElementById('switchL')

function onHoverLeft(){
    switchL.style.color = 'red';
}

function offHoverLeft(){
    switchL.style.color= 'rgb(22, 21, 21)';
}


/* Right Hover Toggles */

document.querySelector('#hoverR').addEventListener('mouseover', onHoverRight)
document.querySelector('#hoverR').addEventListener('mouseout', offHoverRight)

const switchR = document.getElementById('switchR')

function onHoverRight(){
    switchR.style.color = 'red'
}

function offHoverRight(){
    switchR.style.color= 'rgb(22, 21, 21)';
}