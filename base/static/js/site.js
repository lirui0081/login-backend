/*
 *
 */
$(document).ready(function () {
    $("form").submit(function () {
        $(":submit", this).attr("disabled", "disabled");
    });


    // detail
    var nowDetailIndex = null;
    var productModal = $(".product-modal");
    $(".rfid-info-card").click(function(e) {
        $(".mask").fadeIn(400);
        $(".product-modal").fadeIn(400);
        nowDetailIndex = $(".rfid-info-card").index($(this));
        fullDataToModal(nowDetailIndex);
    });
    $(".product-modal .top-close").click(function() {
        $(".mask").fadeOut(200);
        $(".product-modal").fadeOut(200);
    });
    $(".product-modal .left").click(function() {
        if(nowDetailIndex <= 0) {
            return false ;
        }
        nowDetailIndex--;
        fullDataToModal(nowDetailIndex);
    });
    $(".product-modal .right").click(function() {
        if(nowDetailIndex + 1 >= $(".rfid-info-card").length) {
            return false ;
        }
        nowDetailIndex++;
        fullDataToModal(nowDetailIndex);
    });
    function fullDataToModal(num) {
        var _nowInfos = $(".rfid-info-card").eq(num);
        productModal.find('.img img').attr('src', _nowInfos.attr('data-photo'));
        productModal.find('.name').text(_nowInfos.attr('data-name'));
        productModal.find('.status').text(_nowInfos.attr('data-status'));
        productModal.find('.shop .in').text(_nowInfos.attr('data-shop'));
        productModal.find('.rfid .in').text(_nowInfos.attr('data-rfid'));
        productModal.find('.note .in').text(_nowInfos.attr('data-note'));
        productModal.find('.category .in').text(_nowInfos.attr('data-category'));
        productModal.find('.material .in').text(_nowInfos.attr('data-material'));
        productModal.find('.inlay .in').text(_nowInfos.attr('data-inlay'));
        productModal.find('.scale .in').text(_nowInfos.attr('data-scale'));
        productModal.find('.weight .in').text(_nowInfos.attr('data-weight'));
    }
});
