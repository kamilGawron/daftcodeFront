import headerImg from './assets/header.png'

export default function () {
    const header = document.getElementById('header');
    const img = document.createElement('img');
    img.src = headerImg;
    header.appendChild(img);
}
