$(".toggle").click(function () {
    $(".navigation").css({ transform: "translateX(0)" });
});

$(".closebtn").click(function () {
    $(".navigation").css({ transform: "translateX(-100%)" });
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


