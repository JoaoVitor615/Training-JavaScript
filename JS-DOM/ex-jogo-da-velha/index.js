const root = document.querySelector(':root')
const main = document.querySelector('main')
const text = document.querySelector('.text')

//input dos nomes
const playerOne = document.getElementById('player-1')
const playerTwo = document.getElementById('player-2')

//input jogador atual
const currentPlayer = document.getElementById('currentPlayer')

//botão jogar
const playButton = document.getElementById('btnPlay')


const gameButtons = document.querySelectorAll('.btnGame')
const gridGame = document.getElementById('gridGame')

playButton.addEventListener('click', function () {
    if(playerOne.value == playerTwo.value ){
        alert('Insira nomes diferentes para os jogadores')
    } else {
        gridGame.dataset.player = playerOne.value
        currentPlayer.value = playerOne.value

        playButton.disabled = 'true'

    }
    
})

let savedWinsX = []
let savedWinsO = []
//localStorage.setItem('winsX', '0')
//let winsX = localStorage.getItem('winsX')



gameButtons.forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function () {

        if(gridGame.dataset.player === playerOne.value){
            //charKeyBtn.style.setProperty('background-color', '#612B41')
            charKeyBtn.textContent = "X"
            charKeyBtn.classList.remove('active')
            charKeyBtn.classList.add('clicked')
            charKeyBtn.style.setProperty('background-color', 'var(--secondary-color)')
            gridGame.dataset.player = playerTwo.value
            currentPlayer.value = playerTwo.value
            charKeyBtn.disabled = 'true'

            const player = 'x'
            calculateVictory(charKeyBtn, savedWinsX, player)
            
        } else if(gridGame.dataset.player === playerTwo.value){
            //charKeyBtn.style.setProperty('background-color', '#612B41')
            charKeyBtn.textContent = "O"
            charKeyBtn.classList.remove('active')
            charKeyBtn.classList.add('clicked')
            charKeyBtn.style.setProperty('background-color', 'var(--secondary-color)')
            gridGame.dataset.player = playerOne.value
            currentPlayer.value = playerOne.value
            charKeyBtn.disabled = 'true'

            const player = 'o'
            calculateVictory(charKeyBtn, savedWinsO, player)
        } else {
            alert('Insira o nome dos jogadores e clique em JOGAR')
        }
            
    })
    
})

const popup = document.querySelector('.hide-content')
const score = document.querySelector('#score')



function calculateVictory(charKeyBtn, array, player){

    const winsOne = charKeyBtn.dataset.winsone
    const winsTwo = charKeyBtn.dataset.winstwo
    const winsThree = charKeyBtn.dataset.winsthree
    const winsFour = charKeyBtn.dataset.winsfour
    array.push(winsOne)
    array.push(winsTwo)
    array.push(winsThree)
    array.push(winsFour)

    for(let i = 1; i < 9; i++){
        const testVicotry = array.filter(el => el == i)
        if(testVicotry.length == 3){
            popup.style.visibility = 'visible'
            popup.style.opacity = '1';
            h1.innerText = 'Você venceu!'
            
            //if(player == 'x'){
            //    winsX ++
            //} else {
//
            //}

            //score.innerText = `X ${winsX}-0 O`
        } else if(document.querySelectorAll('.clicked').length == 9){
            const h1 = document.getElementById('h1win')
            h1.innerText = 'Deu Velha!'
            popup.style.visibility = 'visible'
            popup.style.opacity = '1';

        }
    }
    
}

document.getElementById('btnRestart').addEventListener('click', () => {
    location.reload()
    //score.innerText = `X ${winsX}-0 O`
})



document.getElementById('themeSwitcher').addEventListener('click', function() {
    if(main.dataset.theme == 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--bg-color-secondary', 'rgb(185, 185, 185)')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--secondary-color', 'rgb(218, 98, 146)')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--bg-color-secondary', '#2c2f31')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--secondary-color', 'rgb(97, 43, 65)')
        main.dataset.theme = 'dark'
    }
})


