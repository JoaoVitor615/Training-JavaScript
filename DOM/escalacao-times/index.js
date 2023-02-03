function addPlayer() {

    const positionPlayer = document.getElementById('position').value
    const namePlayer = document.getElementById('name').value
    const numberPlayer = document.getElementById('number').value

    if(positionPlayer && namePlayer && numberPlayer != '') {

        const confirmation = confirm("Escalar " + namePlayer + " como " + positionPlayer +"?")
        
        if(confirmation) {
            const teamList = document.getElementById('teamList')

            const player = document.createElement('li')
            player.id = 'player-' + numberPlayer
            player.innerText = positionPlayer + ": " + namePlayer + "(" + numberPlayer + ")"
            teamList.appendChild(player)

            document.getElementById('position').value = ""
            document.getElementById('name').value = ""
            document.getElementById('number').value = ""
    
        }

    } else { alert('Preencha todos os campos!') }
}

function removePlayer() {
    const numberPlayer = document.getElementById('numberToRemove').value
    const teamList = document.getElementById('teamList')
    const player = document.getElementById('player-' + numberPlayer)

    if(player !== null){

        const confirmation = confirm("Deseja excluir esse jogador da escalação?")

        if(confirmation) {
            teamList.removeChild(player)
            document.getElementById('numberToRemove').value = ""
        }     

    } else {

        alert('Não foi encontrado nenhum jogador com este número.')
        document.getElementById('numberToRemove').value = ""
    }
            
}