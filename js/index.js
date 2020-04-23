// 顶部
$('.qy-top-left >li').hover(function() {
        $(this).find('div').fadeIn()
        $(this).siblings().find('div').fadeOut()
    }, function() {
        $(this).find('div').fadeOut()
    })
    // 导航
$('.qy-nav-one li').eq(1).on('mouseenter', function() {
    $(this).find('.qy-nav-two').slideDown()
})
$('.qy-nav-one li').eq(1).on('mouseleave', function() {
    $(this).find('.qy-nav-two').slideUp()
})
$('.qy-nav-one li').eq(4).on('mouseenter', function() {
    $(this).find('.qy-nav-three').slideDown()
})
$('.qy-nav-one li').eq(4).on('mouseleave', function() {
    $(this).find('.qy-nav-three').slideUp()
})

// 轮播图
$('.qy-slider ol li').on('click', function() {
    let index = $(this).index()
    $(this).addClass('current').siblings().removeClass('current')
    $('.qy-slider>ul li').eq(index).stop().fadeIn().siblings().stop().fadeOut()
})

let index = -1
let num = $('.qy-slider>ul li')
let length = num.length

function fn() {
    if (index === length - 1) {
        index = 0
    } else {
        index++
    }
    num.eq(index - 1).fadeOut(2000)
    num.eq(index).fadeIn(2000)
    $('.qy-slider ol li').eq(index).addClass('current').siblings().removeClass('current')
}
fn()
let time = setInterval(fn, 3000)

$('.qy-slider').on('mouseenter', function() {
    clearInterval(time)
})
$('.qy-slider').on('mouseleave', function() {
    time = setInterval(fn, 3000)
})

//第二个轮播图
$('.qy-slider-two-all>a').on('mouseenter', function() {
    let num2 = $(this).index()
    $(this).find('div').hide()
    $(this).siblings().find('div').show()
    $('.qy-silder-two-main>ul').eq(num2).show()
    console.log($('.qy-silder-two-main>ul').eq(num2))
    $('.qy-silder-two-main>ul').eq(num2).siblings("ul").hide()
})
$('.qy-slider-two-all>a').on('mouseleave', function() {
    $(this).find('div').show()
})

// 企业资讯
$('.qy-news-bottom>a').on('mouseenter', function() {
    $(this).find('.qy-news-bottom-one-img').find('div').show()
    $(this).find('.qy-news-bottom-one-green').show()
    $(this).siblings().find('.qy-news-bottom-one-green').hide()
    $(this).find('.qy-news-bottom-one>p').css({ "color": "#ffffff" })
})

$('.qy-news-bottom>a').on('mouseleave', function() {
    $(this).find('.qy-news-bottom-one-img').find('div').hide()
    $(this).find('.qy-news-bottom-one-green').hide()
    $(this).find('.qy-news-bottom-one .one').css({ "color": "#373737" })
    $(this).find('.qy-news-bottom-one .two').css({ "color": "#b9b9b9" })
})