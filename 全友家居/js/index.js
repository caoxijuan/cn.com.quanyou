// 导航
$('.qy-nav-one a').eq(1).on('mouseenter', function() {
    $('.qy-nav-two').slideDown()
})

$('.qy-nav-one a').eq(1).on('mouseleave', function() {
    $('.qy-nav-two').slideUp()
})


$('.qy-nav-one a').eq(4).on('mouseenter', function() {
    $('.qy-nav-three').slideDown()
})

$('.qy-nav-one a').eq(4).on('mouseleave', function() {
    $('.qy-nav-three').slideUp()
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