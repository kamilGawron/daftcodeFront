import leftImage from '../assets/547x630.png';
import upperImg from '../assets/380x310.png';
import rightDownImg from '../assets/769x310.png';

export default function (items) {
    const recommendedWrapper = document.getElementById('recommended');
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('row');
    //left side
    const leftWrapper = document.createElement('div');
    leftWrapper.classList.add('col-xl-5');
    leftWrapper.classList.add('recommended__left');
    const leftImgElem = document.createElement('img');
    leftImgElem.src = `http://${items[0].imageUrl}`;
    leftWrapper.appendChild(leftImgElem);
    rowWrapper.appendChild(leftWrapper);
    //right side
    const rightWrapper = document.createElement('div');
    rightWrapper.classList.add('col-xl-7');
    rightWrapper.classList.add('recommended__right');
    //right upper wrapper
    const rightUpperWrapper = document.createElement('div');
    rightUpperWrapper.classList.add('row');
    rightUpperWrapper.classList.add('recommended__right__upper');
    //first img in row
    const leftUpperImgWrapper = document.createElement('div');
    leftUpperImgWrapper.classList.add('col-sm-6');
    leftUpperImgWrapper.classList.add('recommended__right__upper__image');
    const leftUpperImgElem = document.createElement('img');
    // leftUpperImgElem.src = upperImg;
    leftUpperImgElem.src = `http://${items[1].imageUrl}`;
    leftUpperImgWrapper.appendChild(leftUpperImgElem);
    //2nd img in row
    const rightUpperImgWrapper = document.createElement('div');
    rightUpperImgWrapper.classList.add('col-sm-6');
    rightUpperImgWrapper.classList.add('recommended__right__upper__image');
    const rightUpperImgElem = document.createElement('img');
    rightUpperImgElem.src = `http://${items[2].imageUrl}`;
    rightUpperImgWrapper.appendChild(rightUpperImgElem);
    //add 1st img
    rightUpperWrapper.appendChild(leftUpperImgWrapper);
    //add 2nd img
    rightUpperWrapper.appendChild(rightUpperImgWrapper);
    //add images to row
    rightWrapper.appendChild(rightUpperWrapper);
    //

    //down section
    const downWrapper = document.createElement('div');
    downWrapper.classList.add('row');
    downWrapper.classList.add('recommended__right__down');
    const downImageWrapper = document.createElement('div');
    downImageWrapper.classList.add('col-xl-12');
    downImageWrapper.classList.add('recommended__right__down__image');
    const downImageElem = document.createElement('img');
    downImageElem.src = `http://${items[3].imageUrl}`;
    downImageWrapper.appendChild(downImageElem);
    downWrapper.appendChild(downImageWrapper);
    rightWrapper.appendChild(downWrapper);
    rowWrapper.appendChild(rightWrapper);

    recommendedWrapper.appendChild(rowWrapper);

}