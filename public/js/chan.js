/**
* Template Name: Travel - Multipurpose HTML Mobile Template
* Version: 1.0
* Author: HidraTheme 
* Developed By: HidraTheme  
* Author URL: https://themeforest.net/user/hidratheme

NOTE: This is the custom js file for the template
**/

(function ($) {

    "use strict";

    /*=================== PRELOADER ===================*/
    $(window).on('load', function () {
        $(".preloading").fadeOut("slow");
    });

    /*=================== SIDENAV  ===================*/
    $('.button-collapse').sideNav({
        menuWidth: 250,
        edge: 'left',
        closeOnClick: true,
        draggable: true,
        onOpen: function (el) {},
        onClose: function (el) {},
    });

    /*=================== CAROUSEL SLIDER  ===================*/
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    }, setTimeout(autoplay, 4500));

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }

    /*=================== GALLERY FILTERING FUCTION  ===================*/
    $(".filter-button").on("click", function () {
        var value = $(this).attr('data-filter');

        if (value == "gallery-no-filter") {
            $('.gallery-img-box').removeClass("gallery-hidden");
        } else {
            $(".gallery-img-box").not('.' + value).addClass("gallery-hidden");
            $('.gallery-img-box').filter('.' + value).removeClass("gallery-hidden");

        }
    });

    $('.filter-gallery .filter-button').on("click", function () {
        $('.filter-gallery').find('.filter-button.active').removeClass('active');
        $(this).addClass('active');
    });

    /*=================== MAGNIFICPOPUP GALLERY  ===================*/
    $(".gallery-list").magnificPopup({
        type: "image",
        removalDelay: 300
    });

    // ======================= PROMO  ======================= // 
    if ($('#promo-item').length > 0) {
        $("#promo-item").owlCarousel({
            dots: false,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                480: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    margin: 0
                }
            }

        });
    }

    // ======================= TESTIMONIAL  ======================= // 
    if ($('#testimonial-item').length > 0) {
        $("#testimonial-item").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            slideSpeed: 2000,
            margin: 0,
            responsiveClass: true,
            nav: false,
            navText: ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                480: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    margin: 0
                }
            }

        });
    }

    /*=================== FOOTER ===================*/
    $('#page-content').css('min-height', $(document).height() - ($('#header').height() + $('.section.top-header-menu').height()) - $('#footer').height());

    $(function () {
        if ($('textarea#chan').length) {
            CKEDITOR.replace('chan');
        }
    })

    $("form").on("submit", e => {
        e.preventDefault();
        const name = $("#name")
            .val()
            .trim();
        const email = $("#email")
            .val()
            .trim();
        const phone = $("#phone")
            .val()
            .trim();
        const mainsub = $("#mainsub")
            .val()
            .trim();
        const text = $("#text")
            .val()
            .trim();
        const data = {
            name,
            email,
            phone,
            mainsub,
            text
        };
        $.post('/contact', data, function () {
            console.log('Server received our data');
        });
    });


})(jQuery);

var arrLang = {
    'en': {
        // HEADER
        'mn_yky': 'Yay Kyi Yar',

        // SIDE NAV
        'sn_yky': 'Yay Kyi Yar',
        'sn_travel_company': 'Travel &amp; Tour Co., Ltd.',
        'sn_home': 'Home',
        'sn_contact': 'Contact',
        'sn_desti': 'Destination',
        'sn_team': 'Our Team',
        'sn_gallery': 'Gallery',
        'sn_blog': 'Blog',

        // SERVICE
        'os_our': 'Our',
        'os_ser': 'Services',
        'os_book': 'BookingTickets',
        'os_plan': 'PlanningTours',
        'os_docu': 'Documents',
        'os_bookho': 'BookingHotel',
        'os_travel': 'TravelInsurance',
        'os_trans': 'Transport'
    },
    'mm': {
        // HEADER
        'mn_yky': 'ေရၾကည္ရာ',

        // SIDE NAV
        'sn_yky': 'ေရၾကည္ရာ',
        'sn_travel_company': 'ေရၾကည္ရာ ေအဂ်င္စီ',
        'sn_home': 'မူလ',
        'sn_contact': 'ဆက္သြယ္ရန္',
        'sn_desti': 'ခရီးစဥ္မ်ား',
        'sn_team': 'ကြ်ႏု္ပ္တုိ႔၏ ဝန္ထမ္းမ်ား',
        'sn_gallery': 'ခရီးသြားဓာတ္ပံုမ်ား',
        'sn_blog': 'ဘေလာ့စာမ်က္နွာ',

        // SERVICE
        'os_our': 'ကြ်ႏ္ုပ္တို့၏ ',
        'os_ser': 'ဝန္ေဆာင္မႈမ်ား',
        'os_book': 'လက္မွတ္',
        'os_plan': 'အစီအစဥ္',
        'os_docu': 'စာတမ္းကိစၥ',
        'os_bookho': 'ေဟာ္တယ္',
        'os_travel': 'ခရီးသြားအာမခံ',
        'os_trans': 'လမ္းခရီး'
    }
};

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});