function animation() {

 $('.About-text').each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight +10) {
        $(this).addClass('slideIn-animation');
    }　else {
        $(this).remove('slideIn-animation');
    }
 });

 $('.About-img').each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight -50) {
        $(this).addClass('bgfadeIn02');
    }　else {
        $(this).remove('bgfadeIn02');
    }
 });

 $('.Contents_box').each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight -50) {
        $(this).addClass('bgfadeIn02');
    }　else {
        $(this).remove('bgfadeIn02');
    }
 });

 $('.Info-content').each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight) {
        $(this).addClass('fadeup');
    }　else {
        $(this).remove('fadeup');
    }
 });

 $('.pc_item-map').each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight) {
        $(this).addClass('fadeup');
    }　else {
        $(this).remove('fadeup');
    }
 });

 $('.item-info').each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll > position - windowHeight) {
        $(this).addClass('bgfadeIn02');
    }　else {
        $(this).remove('bgfadeIn02');
    }
 });


}
$(window).scroll(function() {
    animation();
})










