
import Swiper from 'swiper';
import carouselImage from '../assets/carousel-item.png'
import prevButton from '../assets/kz-long-arrow-left.png'
import nextButton from '../assets/kz-long-arrow-right.png'
export default function () {
    const carouselWrapper = document.getElementById('swiper-wrapper');
    //prev btn
    const prevBtnWrapper = document.getElementById('swiper-button-prev');
    const btnImagePrevElem = document.createElement('img');
    btnImagePrevElem.src = prevButton;
    prevBtnWrapper.appendChild(btnImagePrevElem);
    //next btn
    const nextBtnWrapper = document.getElementById('swiper-button-next');
    const btnImageNextElem = document.createElement('img');
    btnImageNextElem.src = nextButton;
    nextBtnWrapper.appendChild(btnImageNextElem);

    for (let i = 0; i < 10; i++) {
        let divElem = document.createElement('div');
        divElem.classList.add('swiper-slide');
        let imgElem = document.createElement('img');
        imgElem.src = carouselImage;
        divElem.appendChild(imgElem);
        carouselWrapper.appendChild(divElem);
    }
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
          },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            992: {
                slidesPerView:3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            1400: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1720: {
                slidesPerView: 5,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
          },

    })
}