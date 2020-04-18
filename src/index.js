import header from './scripts/header';
import { createBrand, createOptions, createMobileMenuBtn } from './scripts/nav';
import carousel from './scripts/carousel';
import createContent from './scripts/content';
import createRecommendedItems from './scripts/recommended';
import footer from './scripts/footer';
import Swiper from 'swiper';

import './styles/style.scss';

header();
createBrand();
createOptions();
createMobileMenuBtn();
carousel();
createContent();
createRecommendedItems();
footer();