$('.house-custom-bottom-right a .top-lef').hover(function() {
    $(this).css({
        "width": 75,
        "text-indent": 0,
        "letter-spacing": 0,
        "right": 91
    })
    $('.house-custom-bottom-right a .top-mid').css({
        "right": 58,
    })
    $('.house-custom-bottom-right a .top-right').css({
        'width': 24,
        'right': 25
    })
    $(this).parent().siblings().find('.top-lef').css({
        "width": 24,
        "right": 144
    })
    $(this).parent().siblings().find('.top-mid').css({
        "width": 24,
        "right": 110
    })
    $(this).parent().siblings().find('.top-right').css({
        "width": 75,
        "right": 25
    })
    $(this).parents(".house-custom").siblings(".house-all").find('.top-lef').css({
        "width": 24,
        "right": 144
    })
    $(this).parents(".house-custom").siblings(".house-all").find('.top-mid').css({
        "width": 24,
        "right": 110
    })
    $(this).parents(".house-custom").siblings(".house-all").find('.top-right').css({
        "width": 75,
        "right": 25
    })
}, function() {
    $(this).css({
        "width": 24,
        "text-indent": 6,
        "letter-spacing": 5,
        "right": 144
    })
    $('.house-custom-bottom-right a .top-mid').css({
        "right": 110,
    })
    $('.house-custom-bottom-right a .top-right').css({
        'width': 75,
        'right': 25
    })
})

$('.house-custom-bottom-right a .top-mid').hover(function() {
    $(this).css({
        "width": 75,
        "text-indent": 0,
        "letter-spacing": 0,
        "right": 58
    })
    $('.house-custom-bottom-right a .top-right').css({
        'width': 24,
        'right': 25
    })
    $(this).parent().siblings().find('.top-lef').css({
        "width": 24,
        "right": 144
    })
    $(this).parent().siblings().find('.top-mid').css({
        "width": 24,
        "right": 110
    })
    $(this).parent().siblings().find('.top-right').css({
        "width": 75,
        "right": 25
    })
    $(this).parents(".house-custom").siblings(".house-all").find('.top-lef').css({
        "width": 24,
        "right": 144
    })
    $(this).parents(".house-custom").siblings(".house-all").find('.top-mid').css({
        "width": 24,
        "right": 110
    })
    $(this).parents(".house-custom").siblings(".house-all").find('.top-right').css({
        "width": 75,
        "right": 25
    })
}, function() {
    $(this).css({
        "width": 24,
        "text-indent": 6,
        "letter-spacing": 5,
        "right": 110
    })
    $('.house-custom-bottom-right a .top-right').css({
        'width': 75,
        'right': 25
    })
})


$('.house-custom-bottom-right a .all-left').hover(function() {
    $(this).parents(".house-all").siblings(".house-custom").find('.top-lef').css({
        "width": 24,
        "right": 144
    })
    $(this).parents(".house-all").siblings(".house-custom").find('.top-mid').css({
        "width": 24,
        "right": 110
    })
    $(this).parents(".house-all").siblings(".house-custom").find('.top-right').css({
        "width": 75,
        "right": 25
    })
})

$('.house-custom-bottom-right a .all-mid').hover(function() {
    $(this).parents(".house-all").siblings(".house-custom").find('.top-lef').css({
        "width": 24,
        "right": 144
    })
    $(this).parents(".house-all").siblings(".house-custom").find('.top-mid').css({
        "width": 24,
        "right": 110
    })
    $(this).parents(".house-all").siblings(".house-custom").find('.top-right').css({
        "width": 75,
        "right": 25
    })
})