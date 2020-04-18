import headerImg from '../assets/header.png'
import mobileImage from '../assets/vector-smart-object.png'

export default function () {
    const header = document.getElementById('header');
    const img = document.createElement('img');
    img.classList.add('header-bg');
    img.src = headerImg;
    header.appendChild(img);
    const summerImageWrapper = document.createElement('div');
    summerImageWrapper.classList.add('mobile-summer-image-wrapper');
    const mobileImageElem = document.createElement('img');
    mobileImageElem.classList.add('mobile-summer-image');
    mobileImageElem.src = mobileImage;
    
    summerImageWrapper.appendChild(mobileImageElem);
    header.appendChild(summerImageWrapper);
}
