import magnifierImage from '../assets/kz-search-space.png'
import heartImage from '../assets/kz-heart.png'

export default function (productsAPI) {
    const contentWrapper = document.getElementById('content__items');
    // const showMoreBtn = document.getElementById('show-more-btn');

    const rowElem = document.createElement('div');

    //new arrivals text
    const contentHeaderWrapper = document.getElementById('content__header');
    const headerTitleElem = document.createElement('h3');
    headerTitleElem.classList.add('content__title');
    headerTitleElem.innerHTML = 'New Arrivals';
    contentHeaderWrapper.appendChild(headerTitleElem);
    // end new arrivals

    //show more btn
    const showmoreBtnWrapper = document.getElementById('content__showMore');
    const showMoreBtn = document.createElement('button');
    showMoreBtn.id = 'show-more-btn';
    showMoreBtn.classList.add('content__showMore__button');
    showMoreBtn.innerHTML = 'Show more';
    showmoreBtnWrapper.appendChild(showMoreBtn);


    // end show more
    const newProductsEvent = new Event('newProducts');

    rowElem.classList.add('row');
    rowElem.classList.add('align-items-start');

    let showItemsOnPage = 8;
    let currentPage = 1;
    const pagesCounter = Math.ceil(productsAPI.length / showItemsOnPage);

    showMoreBtn.onclick = () => {
        showProducts(currentPage * showItemsOnPage, (++currentPage * showItemsOnPage));
        if (currentPage == pagesCounter) {
            document.getElementById('show-more-btn').style.display = "none";
        }
        window.dispatchEvent(newProductsEvent);
    }
    showProducts(currentPage - 1, showItemsOnPage);
    function showProducts(startIndex, endIndex) {

        let elements = productsAPI.slice(startIndex, endIndex);
        elements.forEach(element => {
            let colItem = document.createElement('div');
            colItem.classList.add('col-6');
            colItem.classList.add('col-lg-4');
            colItem.classList.add('col-xl-3');
            colItem.classList.add('content__item');
            let imageElem = document.createElement('img');
            imageElem.src = `http://${element.imageUrl}`;
            colItem.appendChild(imageElem);
            //element sale
            if (element.isSale) {
                let saleItem = document.createElement('div');
                saleItem.classList.add('content__item__sale');
                saleItem.innerHTML = 'sale';
                colItem.appendChild(saleItem);
            }
            //item description
            let itemDescriptionItem = document.createElement('div');
            itemDescriptionItem.classList.add('content__item__description');
            itemDescriptionItem.classList.add('item-description');
            //element on hover container
            let hoverInfoItem = document.createElement('div');
            hoverInfoItem.classList.add('content__item__hover');
            hoverInfoItem.classList.add('item-details-to-buy');
            //elem hover name
            let elemHoverNameElem = document.createElement('div');
            elemHoverNameElem.classList.add('content__item__hover__name');
            elemHoverNameElem.innerHTML = element.name;
            hoverInfoItem.appendChild(elemHoverNameElem);
            //elem hover options
            let elemHoverOptions = document.createElement('div');
            elemHoverOptions.classList.add('content__item__hover__options');
            //elem hover desc
            let hoverDescElem = document.createElement('div');
            hoverDescElem.classList.add('content__item__hover__options__desc');
            hoverDescElem.innerHTML = 'add to cart';
            elemHoverOptions.appendChild(hoverDescElem);
            //elem hover icons
            let hoverDescIconWrapper = document.createElement('div');
            hoverDescIconWrapper.classList.add('content__item__hover__options__icons');
            let magnifierIconElem = document.createElement('img');
            magnifierIconElem.src = magnifierImage;
            let heartIconElem = document.createElement('img');
            heartIconElem.src = heartImage;
            hoverDescIconWrapper.appendChild(magnifierIconElem);
            hoverDescIconWrapper.appendChild(heartIconElem);
            elemHoverOptions.appendChild(hoverDescIconWrapper);
            hoverInfoItem.appendChild(elemHoverOptions);

            //element info
            if (element.info) {
                let itemNameInfo = document.createElement('div');
                itemNameInfo.classList.add('content__item__description__info');
                itemNameInfo.innerHTML = element.info;
                itemDescriptionItem.appendChild(itemNameInfo);
            }

            //element name
            let itemNameElem = document.createElement('div');
            itemNameElem.classList.add('content__item__description__name');
            itemNameElem.innerHTML = element.name;
            itemDescriptionItem.appendChild(itemNameElem);
            //element price
            let itemPriceElem = document.createElement('div');
            itemPriceElem.classList.add('content__item__description__price');
            itemPriceElem.innerHTML = element.price + " " + element.currency;
            itemDescriptionItem.appendChild(itemPriceElem);
            //add elem
            colItem.appendChild(itemDescriptionItem);
            colItem.appendChild(hoverInfoItem);
            rowElem.appendChild(colItem);
        });

        contentWrapper.appendChild(rowElem);
    }

}