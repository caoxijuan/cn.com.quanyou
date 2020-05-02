$('.house-nav-left').on('mouseenter', function() {
    $(this).find('.house-nav-left-bottom').slideDown()
})
$('.house-nav-left').on('mouseleave', function() {
    $(this).find('.house-nav-left-bottom').slideUp()
})


$('.bottom-one-one').hover(function() {
    $(this).animate({
        'height': '100%',
    }, 500)
    $(this).find('.bottom-border').css({
        'width': 260,
        "opacity": 1
    })
    $(this).find('.bottom-border-two').css({
        "opacity": 0
    })
}, function() {
    $(this).animate({
        'height': 325,
    }, 500)
    $(this).find('.bottom-border').css({
        'width': 1,
        "opacity": 0
    })
    $(this).find('.bottom-border-two').css({
        "opacity": 1
    })
})

laydate.render({
    elem: '.time'
})


let num = $('.house-nav-left-bottom li:nth-child(2)').offset().top
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= num) {
        $('.side-nav a:last-child').css({
            "display": "block"
        })
    } else {
        $('.side-nav a:last-child').css({
            "display": "none"
        })
    }
})


$('.side-nav a:last-child').on('click', function() {
    $('html').animate({
        "scrollTop": 0
    }, 1000)
})

$('.house-nav-left-bottom li .nav-two').hover(function() {
    $(this).css({
        "background-color": "#fff"
    })
}, function() {
    $(this).css({
        "background-color": "rgba(255, 255, 255, .8)"
    })
})