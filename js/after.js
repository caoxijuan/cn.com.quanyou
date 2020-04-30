$('.house-nav-left').on('mouseenter', function() {
    $(this).find('.house-nav-left-bottom').slideDown()
})
$('.house-nav-left').on('mouseleave', function() {
    $(this).find('.house-nav-left-bottom').slideUp()
})