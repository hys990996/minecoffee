$(function () {

    //設定參數決定顯示的三張卡片
    let prevItem = 0;
    let currentItem = 1;
    let nextItem = 2;

    //預設-selected-left、-selected、-selected-right這三個卡片
    $('.course-item').eq(prevItem).addClass('-selected-left');
    $('.course-item').eq(currentItem).addClass('-selected');
    $('.course-item').eq(nextItem).addClass('-selected-right');


    // 設定自動輪播
    let autoSwap = setInterval(goToSwap, 3500);

    //hover過去就暫停自動輪播效果
    $('.course-item').hover(function () {
        clearInterval(autoSwap)
    }, function () {
        autoSwap = setInterval(goToSwap, 3500)
    },
    )


    //點擊卡片做切換
    $('.course-item').on('click', function () {

        //確認是哪一張卡片被點擊
        let clockwise = $(this).hasClass('-selected-right')
        let Counterclockwise = $(this).hasClass('-selected-left')

        //透過swap函式切換順序
        result = swap(clockwise, Counterclockwise, prevItem, currentItem, nextItem)

        prevItem = result[0]
        currentItem = result[1]
        nextItem = result[2]

        // console.log(prevItem)
        // console.log(currentItem)
        // console.log(nextItem)

    })

    // 為了setInterval 多一個函式去執行swap
    function goToSwap() {
        result = swap(true, false, prevItem, currentItem, nextItem)

        prevItem = result[0]
        currentItem = result[1]
        nextItem = result[2]
    }

    function swap(clockwise, Counterclockwise, prevItem, currentItem, nextItem) {

        let totalItem = $('.course-item').length;
        let result = []

        // 順時針方向旋轉
        if (clockwise) {

            $('.course-item').eq(prevItem).removeClass('-selected-left');
            $('.course-item').eq(currentItem).removeClass('-selected');
            $('.course-item').eq(nextItem).removeClass('-selected-right');
            prevItem = currentItem
            currentItem = nextItem
            nextItem = nextItem + 1

            if (nextItem > totalItem - 1) {
                nextItem = 0
            }

        }
        // 逆時針方向旋轉
        else if (Counterclockwise) {

            $('.course-item').eq(prevItem).removeClass('-selected-left');
            $('.course-item').eq(currentItem).removeClass('-selected');
            $('.course-item').eq(nextItem).removeClass('-selected-right');

            nextItem = currentItem
            currentItem = prevItem
            prevItem = prevItem - 1

            if (prevItem < 0) {
                prevItem = totalItem - 1
            }

        }
        else {
            $('.course-item').eq(prevItem).removeClass('-selected-left');
            $('.course-item').eq(currentItem).removeClass('-selected');
            $('.course-item').eq(nextItem).removeClass('-selected-right');

            prevItem = currentItem
            currentItem = nextItem
            nextItem = nextItem + 1

            if (nextItem > totalItem - 1) {
                nextItem = 0
            }

        }

        $('.course-item').eq(prevItem).addClass('-selected-left');
        $('.course-item').eq(currentItem).addClass('-selected');
        $('.course-item').eq(nextItem).addClass('-selected-right');

        result[0] = prevItem
        result[1] = currentItem
        result[2] = nextItem

        return result

    }

});