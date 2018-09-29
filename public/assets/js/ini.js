$(document).on('click', '.openModal', function () {
    let target = $(this).attr('data-target');
    $(target).addClass('active');
    $('body').addClass('overflow-hidden');
});
$(document).on('click', '.closeModal', function () {
    let target =$(this).closest('.modals');
    $(target).removeClass('active');
    $('body').removeClass('overflow-hidden');
});
$(document).on('click', '.openCollapse', function () {
    $(this).toggleClass('active');
    $(this).parent().children('.collapse').toggleClass('active');
});
$(document).on('click', '#openHamburger', function () {
    $(this).toggleClass('active');
    $('.ini.navbar .ini.menus').toggleClass('active');
});