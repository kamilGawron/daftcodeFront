
import Swiper from 'swiper';
import carouselImage from '../assets/carousel-item.png'
import prevButton from '../assets/kz-long-arrow-left.png'
import nextButton from '../assets/kz-long-arrow-right.png'
export default function () {
    const carouselItems = [
        {
            image: carouselImage,
            name: 'Seersucker underwire',
            price: 49.99,
        }, {
            image: carouselImage,
            name: 'Embroidered Indian cotton beach',
            price: 65,
        }, {
            image: carouselImage,
            name: 'Cabana oversized sunglasses',
            price: 35,
        }, {
            image: carouselImage,
            name: '6" stretch eco swim trunk',
            price: 35,
        }, {
            image: carouselImage,
            name: 'Studded wrap sandals',
            price: 22,
        }, {
            image: carouselImage,
            name: 'Seersucker underwire',
            price: 49.99,
        }, {
            image: carouselImage,
            name: 'Embroidered Indian cotton beach',
            price: 65,
        }, {
            image: carouselImage,
            name: 'Cabana oversized sunglasses',
            price: 35,
        }, {
            image: carouselImage,
            name: '6" stretch eco swim trunk',
            price: 35,
        }, {
            image: carouselImage,
            name: 'Studded wrap sandals',
            price: 22,
        },
    ];
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

    carouselItems.forEach(element => {
        let divElem = document.createElement('div');
        divElem.classList.add('swiper-slide');
        let imgElem = document.createElement('img');
        imgElem.src = element.image;
        let descItem = document.createElement('div');
        descItem.classList.add('swiper-slide__description');
        let descItemName = document.createElement('div');
        descItemName.classList.add('swiper-slide__description__name');
        descItemName.innerHTML = element.name;
        let descItemPrice = document.createElement('div');
        descItemPrice.classList.add('swiper-slide__description__price');
        descItemPrice.innerHTML = element.price;
        descItem.appendChild(descItemName);
        descItem.appendChild(descItemPrice);
        divElem.appendChild(imgElem);
        divElem.appendChild(descItem);
        carouselWrapper.appendChild(divElem);
    });

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1720: {
                slidesPerView: 5,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    })
}