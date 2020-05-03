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

$('.repairs-nav-main a:nth-child(3)').on('click', function() {
    $('.repairs-in').show()
})

$('.repairs-in .close').on('click', function() {
    $('.repairs-in').hide()
})

$('.anti-fake-content .close').on('click', function() {
    $('.anti-fake').hide()
})

$('.repairs-nav-main a:nth-child(4)').on('click', function() {
    $('.anti-fake').show()
})
let num = $('.repairs-nav-title').offset().top
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= num) {
        $('.repairs-nav-main').css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'z-index': 26,
            'background-color': '#ffffff'
        })
    } else {
        $('.repairs-nav-main').css({
            'position': 'static',
        })
    }
})





$('.silder-box-1').mySilder({
    width: 356, //容器的宽度 必选参数!!!!!!
    height: 556, //容器的高度 必选参数!!!!!!
    auto: false, //是否自动滚动
    autoTime: 5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
    direction: 'x', //滚动方向,默认X方向
    autoType: 'left', //滚动方向，auto为true时生效
    few: 1, //一次滚动几个，默认滚动1张
    showFew: 3, //显示几个,就不用调css了,默认显示一个
    clearance: 15, //容器之间的间隙，默认为 0
    silderMode: 'linear', //滚动方式
    timeGap: 350, //动画间隙，完成一次动画需要多长时间，默认700ms
    buttonPre: '.silder-button.btl', //上一个，按钮
    buttonNext: '.silder-button.btr', //下一个，按钮
    jz: true, //点击时，是否等待动画完成
    // runEnd: function() { //回调函数
    //     callbackIndex++;
    //     $('.cj em').text(callbackIndex);
    // }
});