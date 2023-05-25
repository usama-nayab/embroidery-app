// STICTCH STYLES BEGINS

$('.owl-manager').children('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// STICTCH STYLES END

// TESTIMONIALS BEGINS

$('.testimonials-carousel').children('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// TESTIMONIALS END


// HOME TESTIMONIAL BEGINS
$('.home-slider').children('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// HOME TESTIMONIAL ENDS

// VECTOR TYPES BEGINS
$('.vector-type-carousel').children('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// VECTOR TYPES ENDS


// PRINTING METHOD BEGINS
$('.printing-method-carousel').children('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// PRINTING METHOD ENDS

// HOME BANNER BEGINS
$('.home-banner-slides').children('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// HOME BANNER ENDS

// SCROLL TOP FUNCTION 
const scrollTop =()=>{
    $('body').scrollTop();
}