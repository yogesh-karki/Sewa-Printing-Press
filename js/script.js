var clientSlider = new Swiper('.client-slider', {

    slidesPerView: 6,
    slidesPerColumn: 2,
    spaceBetween: 15,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {

        1300: {
            slidesPerView: 6
        },

        600: {
            slidesPerView: 4
        },

        100: {
            slidesPerView: 2
        },
    },

  

  })