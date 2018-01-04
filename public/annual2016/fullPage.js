/**
 * Created by XX on 2016/11/24.
 */
$(document).ready(function () {
    var full_img = $('.full-img img');
    var wnd = $(window);

    full_img.css('width', wnd.width());
    full_img.css('height', wnd.height());

    $(window).resize(function () {
        full_img.css('width', wnd.width());
        full_img.css('height', wnd.height());
    })
});