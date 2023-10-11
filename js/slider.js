
$(function () {

    let windowWidth = window.innerWidth
    let divWidth = windowWidth - 40
    let imgCount = $('.list-block img').length
    let index = 0
    // let timer = setInterval(moveToNext, 5000) 每5000毫秒自動移動



    $('.img-list-m').width(divWidth) //最外層.img-list-m的寬度
    $('.list-block').width(divWidth * imgCount) //list-block的寬度
    $('.list-block img').width(divWidth)

    function moveToNext() {
        if (index < imgCount - 1) {
            index += 1
        } else {
            index = 0
        }

        $('.list-block').animate({
            left: divWidth * index * -1
        })
    }

    $('.samllimg-list-m li').click(function () {
        // clearInterval(timer) //當點擊後先暫停interval自動移動

        index = $(this).index()
        $('.list-block').animate({
            left: divWidth * index * -1
        })

        // setInterval(moveToNext, 5000) //當完成click動作再恢復
    })


    //當視窗resize時的動作
    $(window).resize(function () {
        imgResize()
    })

    function imgResize() {
        windowWidth = window.innerWidth
        divWidth = windowWidth - 40
        console.log(divWidth)

        $('.img-list-m').width(divWidth)
        $('.list-block').width(divWidth * imgCount)
        $('.list-block img').width(divWidth)

        // $('.list-block').animate({
        //     left: divWidth * index * -1
        // })

    }
});


// let timmer =setInterval(某函數,豪秒)
// clearInterval(物件)
// clearInterval(timmer) 暫停計時器