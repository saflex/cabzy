$(".scroller-b").mCustomScrollbar({
    axis: "y",

    autoDraggerLength: false,

});





if ($(window).width() > 1199) {

    $(".scroller-b2").mCustomScrollbar({
        axis: "y",

        autoDraggerLength: false,

    });


} else {
    // change functionality for larger screens
}






// placeholder-focus
$(document).ready(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});



// mobile-viewport
if (screen.width <= 400) {
    $('head').append('<meta name="viewport" content="width=400, user-scalable=0"/>');
} else {
    $('head').append('<meta name="viewport" content="width=device-width">');
}
$(window).on("orientationchange", function() {
    if (window.orientation == 0) // Portrait 
    {
        $('head').append('<meta name="viewport" content="width=device-width">');
    } else // Landscape 
    {
        $('head').append('<meta name="viewport" content="width=640">');
    }
});






/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});





(function($) {
    $(window).load(function() {

        $("ul.dropdown-menu.inner").mCustomScrollbar({
            setHeight: 160,
            theme: "dark",
        });

    });
})(jQuery);




var swiper = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    speed: 1200,

    direction: 'vertical'
});



$(document).ready(function() {
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "img/cal.png",
        buttonImageOnly: true,
    }).click(function() { $(this).datepicker('show'); });
});



$(document).ready(function() {
    $("#datepicker2").datepicker({
        showOn: "button",
        buttonImage: "img/cal.png",
        buttonImageOnly: true,
    }).click(function() { $(this).datepicker('show'); });
});



jQuery(function($) {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Назад',
        nextText: 'Далее',

        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'
        ],

        monthNamesShort: ["Январь", "Феваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],

        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
});