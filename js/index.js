$(function () {


    // journal section 切換效果
    $('.journal-item').eq(0).addClass('active');

    let totalItem = $('.journal-item').length;
    let currentItem = 0;
    let prevItem = -1;

    $('#moveRight').on('click', function () {
        prevItem = currentItem
        currentItem = currentItem + 1

        if (currentItem == totalItem) {
            currentItem = 0
        }

        $('.journal-item').eq(prevItem).removeClass('active');
        $('.journal-item').eq(currentItem).addClass('active');

    });

    $('#moveLeft').on('click', function () {

        prevItem = currentItem
        currentItem = currentItem - 1

        if (currentItem == -1) {
            currentItem = totalItem - 1
        }

        $('.journal-item').eq(prevItem).removeClass('active');
        $('.journal-item').eq(currentItem).addClass('active');
    });

});