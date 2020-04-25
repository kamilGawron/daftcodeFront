import header from './scripts/header';
import { createBrand, createOptions, createMobileMenuBtn } from './scripts/nav';
import carousel from './scripts/carousel';
import createContent from './scripts/content';
import createRecommendedItems from './scripts/recommended';
import footer from './scripts/footer';
import scroll from './scripts/scroll-to-top';
import Swiper from 'swiper';

import './styles/style.scss';


window.addEventListener('DOMContentLoaded', (event) => {
    header();
    createBrand();
    createOptions();
    createMobileMenuBtn();
    carousel();
    createContent();
    createRecommendedItems();
    footer();
    scroll();
});