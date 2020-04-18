import logoImg from '../assets/logo-zonex.png';
import accountImg from '../assets/kz-user@2x.png';
import basketImg from '../assets/kz-bag@2x.png';
import menuImg from '../assets/menu-btn.png';

export const createMobileMenuBtn = function () {
    const btnWrapper = document.getElementById('nav__mobile');
    const img = document.createElement('img');
    img.src = menuImg;
    btnWrapper.appendChild(img);
}
export const createBrand = function () {
    const navBrand = document.getElementById('nav__brand');
    const img = document.createElement('img');
    img.src = logoImg;
    navBrand.appendChild(img);
}
export const createOptions = function () {
    const optionsContainer = document.getElementById('nav__options');
    const accountItem = document.createElement('li');
    const basketItem = document.createElement('li');
    accountItem.classList.add('nav__options__account');
    basketItem.classList.add('nav__options__basket');
    const accountImgElem = document.createElement('img');
    const basketImgElem = document.createElement('img');
    accountImgElem.src = accountImg;
    basketImgElem.src = basketImg;
    basketItem.appendChild(basketImgElem);
    accountItem.appendChild(accountImgElem);
    optionsContainer.appendChild(accountItem);
    optionsContainer.appendChild(basketItem);

    const elemCounterItem = document.createElement('span');
    elemCounterItem.classList.add('nav__options__counter');
    elemCounterItem.innerHTML = '3';
    optionsContainer.appendChild(elemCounterItem);

}
