jQuery.validator.addMethod("alphabetsAndSpacesOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
});

$(function () {
    $('#register_area').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 3,
                alphabetsAndSpacesOnly: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            user_message: {
                required: true
            }
        },
        messages: {
            user_name: {
                required: "Please enter your name."
            },
            email: {
                required: "Please enter your email address."
            }
        },
        focusCleanup: true,
    })
});

$('.team-items-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

$('.pagination_area').slick({
    dots: true,
    infinite: true,
    speed: 600,
    cssEase: 'linear',
    arrows: false
});