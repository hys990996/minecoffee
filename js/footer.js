let scrollTop = document.getElementById('scroll-top');

document.addEventListener('scroll', function () {
    let scrollHeight = window.scrollY

    if (scrollHeight > 400) {
        scrollTop.style.display = 'block'
    } else {
        scrollTop.style.display = 'none'
    }
})

scrollTop.addEventListener('click', function () {

    // window.animate({
    //     targets: document.scrollingElement,
    //     duration: 500,
    //     easing: 'linear',
    //     scrollTop: 0
    // });

    let html_el = document.getElementsByTagName("html")[0];
    html_el.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    // });
})