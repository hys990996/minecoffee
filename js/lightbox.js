$("button#editBtn").on("click", function () {
    $(".lightbox").fadeIn(500);
});

$("button.btn_close").on("click", function () {
    $(".lightbox").fadeOut(500);
});