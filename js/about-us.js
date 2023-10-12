
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

window.addEventListener('scroll', function () {
    let imagesH = document.getElementsByClassName("img-h")
    let imagesV = document.getElementsByClassName("img-v")

    for (let i = 0; i < imagesH.length; i++) {

        let topH = imagesH[i].getBoundingClientRect().top
        let topV = imagesV[i].getBoundingClientRect().top

        if (topH < 350) {
            imagesH[i].classList.add('fadein')
        } else {
            imagesH[i].classList.remove('fadein')
        }

        if (topV < 350) {
            imagesV[i].classList.add('fadein')
        } else {
            imagesV[i].classList.remove('fadein')
        }
    }
})

