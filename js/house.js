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

// 轮播图
var box = new PictureCarousel('#box', {
    direction: 'left', //轮播方向：left，right
    interval: 4000, //单位ms,轮播持续时间
    duration: 50, //单位ms,自动切换时间间隔，最佳速度:容器宽度/duration = 25
    autoplay: true, //是否自动播放
    display: 1, //同时显示的滑块数量
    arrow: true, //是否显示左右箭头
    dots: true, //是否显示指示点
    listData: [ //插入图片等的数据
        {
            src: 'images/house/slider-1.jpg',
            alt: '1'
        },
        {
            src: 'images/house/slider-2.jpg',
            alt: '2'
        },
        {
            src: 'images/house/slider-3.jpg',
            alt: '3'
        },
        // {
        //     src: 't4.png',
        //     alt: '4'
        // }
    ]
});
box.init();

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