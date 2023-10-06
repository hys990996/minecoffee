
window.addEventListener('load', function () {
    let btn_hamburger_el = document.getElementsByClassName("hamburger-btn")[0];
    let nav_el = document.getElementsByClassName("header-block")[0];

    btn_hamburger_el.addEventListener("click", function () {
        this.classList.toggle("-on")
        nav_el.classList.toggle("show")
    });

})
