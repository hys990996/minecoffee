document.addEventListener('scroll', function () {
    let header = document.getElementById('header')
    let logoImg = document.getElementById('header-logo-img')
    let liItem = document.getElementsByClassName('nav-item')
    let headerBtn = document.querySelectorAll('div.header-button img')
    let hamburgerBtn = document.getElementsByClassName('hamburger-btn')[0]
    let scrollHeight = window.scrollY

    //判斷header不包含Light-grayish-orange
    if (!header.classList.contains("Light-grayish-orange")) {
        //滾動高度超過200時更換header樣式
        if (scrollHeight > 200) {
            header.classList.add("bg-Grayishorange", "_underline")
            logoImg.setAttribute("src", "./images/logo/logo_color.svg")
            headerBtn[0].setAttribute("src", "./images/common/cart-orange.svg")
            headerBtn[1].setAttribute("src", "./images/common/signin-orange.svg")
            Array.from(liItem).forEach(element => {
                element.classList.add("scroll")
            })

            hamburgerBtn.classList.add("Dark-orange")

        } else {
            header.classList.remove("bg-Grayishorange", "_underline")
            Array.from(liItem).forEach(element => {
                element.classList.remove("scroll")
            });
            logoImg.setAttribute("src", "./images/logo/logo_white.svg")
            headerBtn[0].setAttribute("src", "./images/common/cart.svg")
            headerBtn[1].setAttribute("src", "./images/common/signin.svg")

            hamburgerBtn.classList.remove("Dark-orange")
        }
    }

})