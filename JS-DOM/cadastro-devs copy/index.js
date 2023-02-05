function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

function createLine(){
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')
}

const btnTec = document.getElementById('add-tec')
const form = document.getElementById('dev-form')
const developers = []
let idList = 0

form.addEventListener('submit', register)
btnTec.addEventListener('click', addTec )


function addTec(ev){
    ev.preventDefault()
    const list = document.querySelector('#tec-list')

    const lineList = document.createElement('li')
    const rowIndex = idList
    idList ++
    lineList.id = 'tecnology-' + rowIndex
    lineList.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    const expLabel = createLabel(' Experiência: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadiol = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLbael1= createLabel('0-2 anos ', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLbael2= createLabel('3-4 anos ', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLbael3= createLabel('5+ anos ', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){
        list.removeChild(lineList)
    })

    lineList.append(
        techNameLabel, techNameInput, expLabel, expRadiol, expLbael1, expRadio2, expLbael2, expRadio3, expLbael3, removeRowBtn
    )
    
    list.appendChild(lineList)
    
}

function register(ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]')
    const inputRows = document.querySelectorAll('.inputRow')
    console.log(inputRows)

    let tecnologies = []
    inputRows.forEach(function (row) {
        const tecName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const tecExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        tecnologies.push({ name: tecName, exp: tecExp })
    })

    const newDev = { fullname: name.value, tecnologies: tecnologies}
    developers.push(newDev)

    name.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })
    
    console.log(developers)

}