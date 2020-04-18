import contentImage from '../assets/309x390.png'
export default function () {
    const contentWrapper = document.getElementById('content__items');
    const rowElem = document.createElement('div');
    rowElem.classList.add('row');
    rowElem.classList.add('align-items-start')
    for (let i = 0; i < 8; i++) {
        let colItem = document.createElement('div');
        colItem.classList.add('col-6');
        colItem.classList.add('col-lg-4');
        colItem.classList.add('col-xl-3');

        colItem.classList.add('content__item');
        let imageElem = document.createElement('img');
        imageElem.src = contentImage;
        colItem.appendChild(imageElem);
        rowElem.appendChild(colItem);
    }
    contentWrapper.appendChild(rowElem);
}