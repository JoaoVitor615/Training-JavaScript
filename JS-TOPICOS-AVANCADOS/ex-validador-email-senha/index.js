function validateEmail(emial) {
    if(!emial.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error("Email Inválido.")
        err.input = 'email'
        throw err 
    }
}

function validatePassword(password) {
    if (
        password.length < 8 || 
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/[\d]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error("Senha inválida")
        err.input = 'password'
        throw err
    }
}

function validateName(name) { 
    if(name == '' || name.match(/[\s+]{2,}/) || name.match(/[^a-zA-Z ]/) || name.length < 3 ){
        const err = new Error("Nome inválido")
        err.input = 'name'
        throw err
    }
}

function resetFormStyles(inputs) {
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const UserInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles(UserInputs)
    try {
        validateName(UserInputs.name.value)
        UserInputs.name.classList.add('success')
        validateEmail(UserInputs.email.value)
        UserInputs.email.classList.add('success')
        validatePassword(UserInputs.password.value)
        UserInputs.password.classList.add('success')
    } catch (err) {
        UserInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})