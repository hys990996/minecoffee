document.addEventListener('DOMContentLoaded', function () {

    // let tabSet = document.getElementsByClassName('tabSet');
    //取得所有的tab
    let allTab = document.querySelectorAll('input[type=radio]');
    //取得所有的tab內容
    let allTabSection = document.querySelectorAll('div.tab-Section');

    //用迴圈依序建立聆聽事件
    for (let i = 0; i < allTab.length; i++) {
        allTab[i].addEventListener('click', function () {

            //每點擊一次tab先將全部的tab內容隱藏
            for (let j = 0; j < allTabSection.length; j++) {
                console.log()
                allTabSection[j].classList.remove("show");
            }

            //再確認點擊的tab，顯示相對應的tab內容隱藏
            if (allTab[i].checked) {
                allTabSection[i].classList.add("show");
            }
        })

    }
})
