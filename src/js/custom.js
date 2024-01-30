// toggle
$(document).ready(function () {
    $(".menu-btn a").click(function () {
        $(".menu ").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.menu ').on('click', function () {
        $(".menu ").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.menu a').on('click', function () {
        $(".menu").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });
});


// 
// $(document).ready(function () {
//     $(".toggle-button").click(function () {
//         $(".menu").slideToggle();
//     })
// });

// active class
$(document).ready(function () {
    $('.menu ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});


