function newLine(){
    const newLine = document.createElement('li')
    newLine.innerText = "Terceira Linha"

    const list = document.getElementById('list')
    list.appendChild(newLine)
}