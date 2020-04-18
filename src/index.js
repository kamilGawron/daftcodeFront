import header from './header';
import { createBrand, createOptions, createMobileMenuBtn } from './nav';
import carousel from './carousel';
import Swiper from 'swiper';

import './styles/style.scss';

header();
createBrand();
createOptions();
createMobileMenuBtn();
carousel();