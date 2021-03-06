import header from './scripts/header';
import { createBrand, createOptions, createMobileMenuBtn } from './scripts/nav';
import carousel from './scripts/carousel';
import createContent from './scripts/content';
import createRecommendedItems from './scripts/recommended';
import footer from './scripts/footer';
import scroll from './scripts/scroll-to-top';
import hideLoader from './scripts/loader';
import showFailedMsg from './scripts/onFetchFailed';

import Swiper from 'swiper';

import fetchData from './scripts/fetchData'

import './styles/style.scss';


window.addEventListener('DOMContentLoaded', (event) => {
    fetchData().then(res => {
        carousel(res.slice(20, 30));
        createContent(res);
        createRecommendedItems(res.slice(10, 14));
        createOptions();
    }
    ).catch(err => {
        showFailedMsg();
    })
        .finally(() => {
            hideLoader();

        });
    header();
    createBrand();
    createMobileMenuBtn();
    footer();
    scroll();
});