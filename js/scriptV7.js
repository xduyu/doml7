const randomBtnColor = document.getElementById('randomBtn')
const randomTextColor = document.getElementById('text')


randomBtnColor.addEventListener('click', () => {
    let val1 = Math.round(Math.random() * 255)
    let val2 = Math.round(Math.random() * 255)
    let val3 = Math.round(Math.random() * 255)
    console.log(val1)
    randomTextColor.style.color = `rgba(${val1}, ${val3}, ${val3})`;
})


const textCount = document.getElementById('textCount')
let count = 0;


document.getElementById('addBtn').addEventListener('click', () => {
    count++;
    textCount.textContent = `Счеётчик ${count}`;
})

document.getElementById('minusBtn').addEventListener('click', () => {
    count--;
    textCount.textContent = `Счеётчик ${count}`;
})



const inputData = document.getElementById('inputData')
const btnGuess = document.getElementById('btnGuess')
const btnFail = document.getElementById('btnFail')
const gameRes = document.getElementById('gameRes')

function startGame() {
    let randomNum = Math.round((Math.random() * 20) + 1)
}


startGame()
