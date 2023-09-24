let scrollTop = document.getElementById('scroll-top');
scrollTop.addEventListener('click', function () {

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