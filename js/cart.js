

let itemList = document.querySelectorAll('div.item')
let closeBtn = document.querySelectorAll('button#closeBtn')

for (let i = 0; i < closeBtn.length; i++) {

    closeBtn[i].addEventListener('click', function () {
        itemList[i].remove()
    })
}