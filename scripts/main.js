let isRotated = false
const card = document.querySelector('.card')
function Rotate() {
    if(!isRotated) {
        card.classList.add('rotated')
        isRotated = true
    } else {
        card.classList.remove('rotated')
        isRotated = false
    }
}