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

$('.repairs-in-name input').on('click', function() {
    $(this).val()
})