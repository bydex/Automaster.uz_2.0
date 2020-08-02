import Swiper from 'swiper';

const headerBg       = document.querySelector('.header__background'),
    headerSlider     = document.querySelector('.header__slider'),
    headerThumbnails = document.querySelector('.header__thumbnails');



const headerBgSettings = {
    effect: 'fade',
    init: false,
};
const headerBgSwiper = new Swiper(headerBg, headerBgSettings);

const headerThumbnailsSettings = {
    // slideActiveClass: 'thumbnail_active',
    spaceBetween: 30,
    slidesPerView: 3,
    clickable: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    init: false,
};
const headerThumbnailsSwiper = new Swiper(headerThumbnails, headerThumbnailsSettings);

const headerSliderSettings = {
    grabCursor: true,
    slideActiveClass: 'header__slide_active',
    speed: 1000,
    loop: true,
    thumbs: {
        swiper: headerThumbnailsSwiper
    },
    init: false,
};
const headerSliderSwiper = new Swiper(headerSlider, headerSliderSettings);

headerBgSwiper.init();
headerThumbnailsSwiper.init();
headerSliderSwiper.init();
