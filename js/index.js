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
let num3 = $('.qy-slider>ul li')
let length = num3.length

function fn() {
    if (index === length - 1) {
        index = 0
    } else {
        index++
    }
    num3.eq(index - 1).fadeOut(2000)
    num3.eq(index).fadeIn(2000)
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
    $('.qy-silder-two-main>ul').eq(num2).addClass('ative1').show()
    $('.qy-silder-two-main>ul').eq(num2).siblings("ul").hide().removeClass('ative1')
})
$('.qy-slider-two-all>a').on('mouseleave', function() {
    $(this).find('div').show()
})

let slider = document.querySelector('.qy-silder-two-main');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let sliderWidth = slider.offsetWidth; // 获取窗口的宽度
let num = 0; // 声明计算器
let circle = 0;
let flag = true;
let ul = document.querySelector('.qy-silder-two-main>.ative1');
console.log(ul)
let ol = document.querySelector('.project-slider-main>ol');
let fisrtLi = document.querySelector('.qy-silder-two-main>.ative1 li:first-child');
ul.appendChild(fisrtLi.cloneNode(true))
ul.style.width = ul.children.length * sliderWidth + 'px';
next.addEventListener('click', function() {
    // 判断动画状态是否是true
    if (flag) {
        flag = false;
        // 3.判断图片是否走到了最后一个 num
        // 3.1 如果是 num 的值和图片的个数一样 那么就让num为0
        // console.log(num, ul.children.length - 1)
        // 索引是不是最后一个
        if (num == ul.children.length - 1) {
            // 那么就让num为0
            ul.style.left = 0;
            num = 0;
        }
        // 4.让num++
        num++;
        // 5.让ul移动
        animate(ul, {
            left: -num * sliderWidth
        }, function() {
            flag = true;
        })
    }
})

// 功能3:点击左箭头 图片往右走 点击一次 走一张图片 无缝的轮播
// 3.1.给左边箭头注册点击事件
prev.addEventListener('click', function() {
    if (flag) {
        flag = false;
        // 3.2.判断一下 num是不是0
        if (num == 0) {
            // 3.3.如果是0, 让num为ul数组的最大索引
            num = ul.children.length - 1;
            // 3.4.同时让ul的left变成 - num * 窗口宽度
            ul.style.left = -num * sliderWidth + 'px';
        }
        // 3.5.让num递减
        num--;
        // 3.6.移动ul
        animate(ul, {
            left: -num * sliderWidth
        }, function() {
            flag = true;
        })

        // 1.点击左侧按钮  让circle 自减
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        // 2.让小圆点发生变化
        circleChange();
    }


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