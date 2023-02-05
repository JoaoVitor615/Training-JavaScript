const addButton = document.querySelector('#btnAdd')
const cancelButton = document.querySelector('.popup-close')
const popup = document.querySelector('.popup-wrapper')

addButton.addEventListener('click', () => {
    popup.style.display = 'block'
})

cancelButton.addEventListener('click', () => {
    popup.style.display = 'none'
})