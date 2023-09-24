// 處理點擊Next下移至報名資料區域
let btnNext = document.getElementById('nextBtn')
let formHeight = document.getElementsByClassName('form-title')[0]

btnNext.addEventListener('click', (e) => {
    formHeight = e.pageY
    scrollTo({
        top: formHeight,
        behavior: 'smooth'
    })
})

// 處理數量加減
let minusBtn = document.getElementsByClassName('minus')[0]
let plusBtn = document.getElementsByClassName('plus')[0]
let numCount = document.getElementById('numCount')
let maxNum = 8;
let minNum = 1;


minusBtn.addEventListener('click', () => {
    let num = parseInt(numCount.innerText)
    if (num > minNum) {
        numCount.innerText = num - 1

        addOrRemoveAccordion('remove')
    }
})

plusBtn.addEventListener('click', () => {
    let num = parseInt(numCount.innerText)

    if (num < maxNum) {
        numCount.innerText = num + 1

        addOrRemoveAccordion('add')
    }

})

function addOrRemoveAccordion(action) {

    let accordion_section = document.getElementById('accordion')

    switch (action) {
        case 'remove':
            let accordion_item = accordion_section.lastElementChild
            accordion_item.remove()
            break

        case 'add':
            //取得目前有幾個accordion-item
            let accordionNum = document.getElementsByClassName('accordion-item').length

            //新增最外層的<div class="accordion-item"></div>
            let formContent = document.createElement('div')
            formContent.className = 'accordion-item'

            //新增<input type="checkbox" id="cd1"> 元素
            //id的數量＝目前的accordion-item數量+1
            //再append進去父節點accordion-item
            let inputCheckbox = document.createElement('input')
            inputCheckbox.type = 'checkbox'
            inputCheckbox.id = `cd${accordionNum + 1}`
            formContent.appendChild(inputCheckbox)

            //新增<label for="cd1" data-name="王小明"></label> 元素
            //for屬性＝input的id
            //再append進去父節點accordion-item
            let labelCheckbox = document.createElement('label')
            labelCheckbox.setAttribute('for', `cd${accordionNum + 1}`)
            labelCheckbox.setAttribute('data-name', `User Name`)
            labelCheckbox.innerHTML = `<img src="./images/common/user-icon.svg" alt="icon" class="user-icon">
            <img src="./images/common/arrow-down.svg" alt="icon" class="arrow-down">`
            formContent.appendChild(labelCheckbox)

            //新增<div class="form-content"></div> 元素
            //innerHTML固定內容
            //再append進去父節點accordion-item
            let divContent = document.createElement('div')
            divContent.className = 'form-content'
            divContent.innerHTML = `<div class="leftside">
            <input type="text" placeholder="name">
            <input type="text" placeholder="phone">
            <input type="text" placeholder="e-mail">
        </div>
        <div class="rightside">
            <div class="title">What’s your favor</div>
            <input name="roast-level" type="range" id="roast-level" min="0" max="100" value="0"
                step="50">
            <ul class="option">
                <li>淺焙</li>
                <li>中焙</li>
                <li>深焙</li>
            </ul>
            <input name="roast-level" type="range" id="roast-level" min="0" max="100" value="50"
                step="50">
            <ul class="option">
                <li>酸</li>
                <li>適中</li>
                <li>苦</li>
            </ul>
            <input name="roast-level" type="range" id="roast-level" min="0" max="100" value="25"
                step="25">
            <ul class="option">
                <li>花香</li>
                <li>果香</li>
                <li>甜味</li>
                <li>堅果</li>
                <li>其他</li>
            </ul>
                                    </div>`
            formContent.appendChild(divContent)

            //最後將accordion-item元素append進去父節點accordion_section
            accordion_section.appendChild(formContent)
    }


}