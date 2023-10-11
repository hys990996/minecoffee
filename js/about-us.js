
window.addEventListener('load', function () {
    let highQualityEle = document.getElementsByClassName("high-quality")
    let windowWidth = window.innerWidth

    if (windowWidth <= 767) {
        for (let i = 0; i < highQualityEle.length; i++) {
            if (highQualityEle[i].classList.contains('-reverse')) {
                highQualityEle[i].classList.remove('-reverse');
                highQualityEle[i].classList.add('orange');
            }
        }
    } else {
        for (let i = 0; i < highQualityEle.length; i++) {
            if (highQualityEle[i].classList.contains('orange')) {
                highQualityEle[i].classList.remove('orange');
                highQualityEle[i].classList.add('-reverse');
            }
        }
    }

})

window.addEventListener('resize', function () {
    let highQualityEle = document.getElementsByClassName("high-quality")
    let windowWidth = window.innerWidth

    if (windowWidth <= 767) {
        for (let i = 0; i < highQualityEle.length; i++) {
            if (highQualityEle[i].classList.contains('-reverse')) {
                highQualityEle[i].classList.remove('-reverse');
                highQualityEle[i].classList.add('orange');
            }
        }
    } else {
        for (let i = 0; i < highQualityEle.length; i++) {
            if (highQualityEle[i].classList.contains('orange')) {
                highQualityEle[i].classList.remove('orange');
                highQualityEle[i].classList.add('-reverse');
            }
        }
    }
})
