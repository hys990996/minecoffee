// 處理數量加減
let minusBtn = document.getElementsByClassName('minus')[0]
let plusBtn = document.getElementsByClassName('plus')[0]
let numCount = document.getElementById('numCount')
let maxNum = 10;
let minNum = 1;


minusBtn.addEventListener('click', () => {
    let num = parseInt(numCount.innerText)
    if (num > minNum) {
        numCount.innerText = num - 1
    }
})

plusBtn.addEventListener('click', () => {
    let num = parseInt(numCount.innerText)

    if (num < maxNum) {
        numCount.innerText = num + 1
    }
})