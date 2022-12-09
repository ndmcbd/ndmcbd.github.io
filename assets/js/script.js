

function formatNumber(value, decimals) {
    let s = (+value).toLocaleString('en-US').split(".");
    return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
}

$(document).scroll(function() {
    if($(window).scrollTop() > 0) {
        $('nav').css({
            'background' : '#14141a',
        });
        $('#scrollToTop').css({
            'visibility' : 'visible',
        });
    }
    else {
        $('nav').css({
            'background' : 'transparent'
        });
        $('#scrollToTop').css({
            'visibility' : 'hidden',
        });
    }
});

$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.goto').toggleClass('open');
        $('.goto li').toggleClass('fade');
        $('.hamburger').toggleClass('toggle');
    });

    if ($('.animCounter').is(':visible')) {
        $('.animCounter').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
);


