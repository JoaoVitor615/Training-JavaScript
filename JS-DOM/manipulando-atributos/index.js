const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value = 'Olá Mundo!'
    console.log(input.getAttribute('value'))
    console.log(input.value)
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'date' ? 'date' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function() {
    input.placeholder = 'Digite algo'
})

document.getElementById('disable').addEventListener('click', function() {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    console.log(data)
})