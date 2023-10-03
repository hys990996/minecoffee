$(function () {
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



    // $('#moveRight').on('click', function () {
    //     let nextItem = currentItem;
    //     currentItem--;
    //     setSlide(nextItem, currentItem);
    // });

    // $('#moveLeft').on('click', function () {
    //     let preItem = currentItem;
    //     currentItem++;
    //     setSlide(preItem, currentItem);
    // });

    // function setSlide(prev, next) {
    //     let slide = currentItem;

    //     if (next > totalItem - 1) {
    //         slide = 0;
    //         currentItem = 0;
    //     }

    //     if (next < 0) {
    //         slide = totalItem - 1;
    //         currentItem = totalItem - 1;
    //     }

    //     $('.journal-item').eq(prev).removeClass('active');
    //     $('.journal-item').eq(slide).addClass('active');

    //     console.log('current ' + currentItem);
    //     console.log('prev ' + prev);

});