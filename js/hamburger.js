
window.addEventListener('load', function () {
    let header = document.getElementById('header')
    let btn_hamburger_el = document.getElementsByClassName("hamburger-btn")[0]
    let nav_el = document.getElementsByClassName("header-block")[0]
    let logoImgM = document.getElementById('header-logo-img-m')
    let headerBtn = document.querySelectorAll('div.header-button img')

    btn_hamburger_el.addEventListener("click", function () {

        this.classList.toggle("-on")
        nav_el.classList.toggle("show")

        let scrollHeight = window.scrollY

        if (header.classList.contains("-indexpage") && scrollHeight <= 200) {

            if (btn_hamburger_el.classList.contains("-on")) {
                header.classList.add("bg-Grayishorange")
                logoImgM.setAttribute("src", "./images/logo/logo_color.svg")
                headerBtn[0].setAttribute("src", "./images/common/cart-orange.svg")
                headerBtn[1].setAttribute("src", "./images/common/signin-orange.svg")

                btn_hamburger_el.classList.add("Dark-orange")
            } else {
                header.classList.remove("bg-Grayishorange")
                logoImgM.setAttribute("src", "./images/logo/logo_white.svg")
                headerBtn[0].setAttribute("src", "./images/common/cart.svg")
                headerBtn[1].setAttribute("src", "./images/common/signin.svg")

                btn_hamburger_el.classList.remove("Dark-orange")

            }
        }

    });

})
