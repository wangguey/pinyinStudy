/* jshint esversion: 8 */

$(document).ready(function ()
{
    $('[data-toggle="tooltip"]').tooltip();

    function updateScrollingView()
    {
        const scrollValue = $(window).scrollTop();
        if (scrollValue > 100)
        {
            $('#indexNav').addClass('affix');
            $('#mainNav').addClass('affix');
            $('#mainPic>.jumbotron').addClass('affix');
        } else
        {
            $('#indexNav').removeClass('affix');
            $('#mainNav').removeClass('affix');
            $('#mainPic>.jumbotron').removeClass('affix');
        }
    }
    updateScrollingView();

    $(window).on('scroll', () =>
    {
        updateScrollingView();
    });

    $(".nav-button").click(function ()
    {
        $(this).toggleClass('active');
        $('.navbar-list').toggleClass('active');
        $('.navbar-default').toggleClass('active');
    });


    $(".navbar-list a").click(function ()
    {
        $(".nav-button").removeClass('active');
        $('.navbar-list').removeClass('active');
        $('.navbar-default').removeClass('active');
    });

    //縮放或滑動時取消以下個件active的類別
    $(window).bind('scroll resize', function ()
    {
        $(".nav-button").removeClass('active');
        $('.navbar-list').removeClass('active');
        $('.navbar-default').removeClass('active');
    });



    //type js
    // setTimeout(function () {
    //     $("#introduction-1").typed({
    //         strings: ["你好，我是Andy"],
    //         typeSpeed: 40
    //     });
    //     $("#introduction-2").typed({
    //         strings: ["我從事網頁前端工程與前端技術教育"],
    //         typeSpeed: 40
    //     })
    // }, 0);

    // setTimeout(function () {
    //     $("#introduction-1").typed({
    //         strings: ["Hello, I'm Andy"],
    //         typeSpeed: 40
    //     });

    //     $("#introduction-2").typed({
    //         strings: ["I'm a Front-end Developer and Educator"],
    //         typeSpeed: 40
    //     })
    // }, 3000);

    // $('a.page-scroll, #scrollTopBtn').bind('click', function (event) {
    //     const $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });

    new WOW().init();
});