import axios from 'axios'



const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [];
            response.products.forEach(element => {
                products.push({
                    name: element.brandName,
                    price: element.price.current.value,
                    imageUrl: element.imageUrl,
                    currency: element.price.currency
                })
            });
            resolve(products);
        }, 2000)

    })
    console.log('fetch data fun');
    // axios.get('https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US', {
    //     headers: {
    //         "x-rapidapi-host": "asos2.p.rapidapi.com",
    //         "x-rapidapi-key": "181b612297mshd0e7e19beb1bc7fp1b8e4fjsnfe7f21eb28e8"
    //     }
    // }).then(res => {
    //     console.log(JSON.stringify(res.data))
    // })
    // console.log();
}

const response = {
    "searchTerm": "",
    "categoryName": "Shoes, Boots & Sneakers",
    "itemCount": 1402,
    "redirectUrl": "",
    "products": [
        {
            "id": 13309512,
            "name": "adidas Originals ZX Flux sneakers in triple black",
            "price": {
                "current": {
                    "value": 100,
                    "text": "$100.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16454120,
            "brandName": "adidas Originals",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1556206,
            "productType": "Product",
            "url": "adidas-originals/adidas-originals-zx-flux-sneakers-in-triple-black/prd/13309512?clr=&colourWayId=16454120",
            "imageUrl": "images.asos-media.com/products/adidas-originals-zx-flux-sneakers-in-triple-black/13309512-1-bk1black1",
            "isSellingFast": false
        },
        {
            "id": 14482892,
            "name": "Moss London woven suede loafer in blue",
            "price": {
                "current": {
                    "value": 72,
                    "text": "$72.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16619508,
            "brandName": "MOSS BROS",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1644044,
            "productType": "Product",
            "url": "moss-bros/moss-london-woven-suede-loafer-in-blue/prd/14482892?clr=&colourWayId=16619508",
            "imageUrl": "images.asos-media.com/products/moss-london-woven-suede-loafer-in-blue/14482892-1-blue",
            "isSellingFast": false
        },
        {
            "id": 14040114,
            "name": "ASOS DESIGN boat shoes in white faux leather with chunky sole",
            "price": {
                "current": {
                    "value": 72,
                    "text": "$72.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16586830,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1613366,
            "productType": "Product",
            "url": "asos-design/asos-design-boat-shoes-in-white-faux-leather-with-chunky-sole/prd/14040114?clr=&colourWayId=16586830",
            "imageUrl": "images.asos-media.com/products/asos-design-boat-shoes-in-white-faux-leather-with-chunky-sole/14040114-1-white",
            "isSellingFast": false
        },
        {
            "id": 14580034,
            "name": "ASOS DESIGN sneakers with chunky sole and contrast heel in white",
            "price": {
                "current": {
                    "value": 48,
                    "text": "$48.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16627529,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1653018,
            "productType": "Product",
            "url": "asos-design/asos-design-sneakers-with-chunky-sole-and-contrast-heel-in-white/prd/14580034?clr=&colourWayId=16627529",
            "imageUrl": "images.asos-media.com/products/asos-design-sneakers-with-chunky-sole-and-contrast-heel-in-white/14580034-1-white",
            "isSellingFast": false
        },
        {
            "id": 13905704,
            "name": "TOMS espadrilles recycled bottles black",
            "price": {
                "current": {
                    "value": 61,
                    "text": "$61.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16575582,
            "brandName": "Toms",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1603137,
            "productType": "Product",
            "url": "toms/toms-espadrilles-recycled-bottles-black/prd/13905704?clr=&colourWayId=16575582",
            "imageUrl": "images.asos-media.com/products/toms-espadrilles-recycled-bottles-black/13905704-1-black",
            "isSellingFast": false
        },
        {
            "id": 14598644,
            "name": "Puma Storm stitching sneakers in gray",
            "price": {
                "current": {
                    "value": 90,
                    "text": "$90.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16628974,
            "brandName": "Puma",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1654518,
            "productType": "Product",
            "url": "puma/puma-storm-stitching-sneakers-in-gray/prd/14598644?clr=&colourWayId=16628974",
            "imageUrl": "images.asos-media.com/products/puma-storm-stitching-sneakers-in-gray/14598644-1-grey",
            "isSellingFast": false
        },
        {
            "id": 13303686,
            "name": "Jack & Jones canvas plimsoll in white",
            "price": {
                "current": {
                    "value": 47,
                    "text": "$47.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16537180,
            "brandName": "Jack & Jones",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1555725,
            "productType": "Product",
            "url": "jack-jones/jack-jones-canvas-plimsoll-in-white/prd/13303686?clr=&colourWayId=16537180",
            "imageUrl": "images.asos-media.com/products/jack-jones-canvas-plimsoll-in-white/13303686-1-brightwhite",
            "isSellingFast": false
        },
        {
            "id": 13655472,
            "name": "ASOS DESIGN Wide Fit sneakers in navy canvas",
            "price": {
                "current": {
                    "value": 19,
                    "text": "$19.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16555314,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1582511,
            "productType": "Product",
            "url": "asos-design/asos-design-wide-fit-sneakers-in-navy-canvas/prd/13655472?clr=&colourWayId=16555314",
            "imageUrl": "images.asos-media.com/products/asos-design-wide-fit-sneakers-in-navy-canvas/13655472-1-navy",
            "isSellingFast": false
        },
        {
            "id": 14061865,
            "name": "ASOS DESIGN Wide Fit tech sandals in black with tape straps",
            "price": {
                "current": {
                    "value": 26,
                    "text": "$26.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16588574,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1614689,
            "productType": "Product",
            "url": "asos-design/asos-design-wide-fit-tech-sandals-in-black-with-tape-straps/prd/14061865?clr=&colourWayId=16588574",
            "imageUrl": "images.asos-media.com/products/asos-design-wide-fit-tech-sandals-in-black-with-tape-straps/14061865-1-black",
            "isSellingFast": false
        },
        {
            "id": 13909975,
            "name": "Base london lense penny loafers tan leather",
            "price": {
                "current": {
                    "value": 103,
                    "text": "$103.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16575958,
            "brandName": "Base London",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1603328,
            "productType": "Product",
            "url": "base-london/base-london-lense-penny-loafers-tan-leather/prd/13909975?clr=&colourWayId=16575958",
            "imageUrl": "images.asos-media.com/products/base-london-lense-penny-loafers-tan-leather/13909975-1-tan",
            "isSellingFast": false
        },
        {
            "id": 14045161,
            "name": "ASOS DESIGN sneakers in stone with chunky sole",
            "price": {
                "current": {
                    "value": 56,
                    "text": "$56.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16587343,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1613643,
            "productType": "Product",
            "url": "asos-design/asos-design-sneakers-in-stone-with-chunky-sole/prd/14045161?clr=&colourWayId=16587343",
            "imageUrl": "images.asos-media.com/products/asos-design-sneakers-in-stone-with-chunky-sole/14045161-1-stone",
            "isSellingFast": false
        },
        {
            "id": 14045708,
            "name": "ASOS DESIGN sneakers with chunky sole",
            "price": {
                "current": {
                    "value": 72,
                    "text": "$72.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16587367,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1613681,
            "productType": "Product",
            "url": "asos-design/asos-design-sneakers-with-chunky-sole/prd/14045708?clr=&colourWayId=16587367",
            "imageUrl": "images.asos-media.com/products/asos-design-sneakers-with-chunky-sole/14045708-1-white",
            "isSellingFast": false
        },
        {
            "id": 14077839,
            "name": "ASOS DESIGN tech sandals with tape straps",
            "price": {
                "current": {
                    "value": 32,
                    "text": "$32.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16589780,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1615899,
            "productType": "Product",
            "url": "asos-design/asos-design-tech-sandals-with-tape-straps/prd/14077839?clr=&colourWayId=16589780",
            "imageUrl": "images.asos-media.com/products/asos-design-tech-sandals-with-tape-straps/14077839-1-navy",
            "isSellingFast": false
        },
        {
            "id": 14081007,
            "name": "ASOS DESIGN Wide Fit tassel loafers in black leather",
            "price": {
                "current": {
                    "value": 64,
                    "text": "$64.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16589988,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1616148,
            "productType": "Product",
            "url": "asos-design/asos-design-wide-fit-tassel-loafers-in-black-leather/prd/14081007?clr=&colourWayId=16589988",
            "imageUrl": "images.asos-media.com/products/asos-design-wide-fit-tassel-loafers-in-black-leather/14081007-1-black",
            "isSellingFast": false
        },
        {
            "id": 14155331,
            "name": "Nike Air Max 200 sneakers in triple red",
            "price": {
                "current": {
                    "value": 120,
                    "text": "$120.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16595534,
            "brandName": "Nike",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1621502,
            "productType": "Product",
            "url": "nike/nike-air-max-200-sneakers-in-triple-red/prd/14155331?clr=&colourWayId=16595534",
            "imageUrl": "images.asos-media.com/products/nike-air-max-200-sneakers-in-triple-red/14155331-1-red",
            "isSellingFast": false
        },
        {
            "id": 14307448,
            "name": "Ellesse massello sneakers in white red",
            "price": {
                "current": {
                    "value": 115,
                    "text": "$115.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16606781,
            "brandName": "ellesse",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1632572,
            "productType": "Product",
            "url": "ellesse/ellesse-massello-sneakers-in-white-red/prd/14307448?clr=&colourWayId=16606781",
            "imageUrl": "images.asos-media.com/products/ellesse-massello-sneakers-in-white-red/14307448-1-white",
            "isSellingFast": false
        },
        {
            "id": 14307568,
            "name": "Ellesse flip flops in black",
            "price": {
                "current": {
                    "value": 28,
                    "text": "$28.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16606786,
            "brandName": "ellesse",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1632588,
            "productType": "Product",
            "url": "ellesse/ellesse-flip-flops-in-black/prd/14307568?clr=&colourWayId=16606786",
            "imageUrl": "images.asos-media.com/products/ellesse-flip-flops-in-black/14307568-1-black",
            "isSellingFast": false
        },
        {
            "id": 14307574,
            "name": "Ellesse sparta sneakers in black",
            "price": {
                "current": {
                    "value": 115,
                    "text": "$115.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16606795,
            "brandName": "ellesse",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1632578,
            "productType": "Product",
            "url": "ellesse/ellesse-sparta-sneakers-in-black/prd/14307574?clr=&colourWayId=16606795",
            "imageUrl": "images.asos-media.com/products/ellesse-sparta-sneakers-in-black/14307574-1-black",
            "isSellingFast": false
        },
        {
            "id": 13910720,
            "name": "Base London julius sandals in black leather",
            "price": {
                "current": {
                    "value": 64,
                    "text": "$64.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16575985,
            "brandName": "Base London",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1603356,
            "productType": "Product",
            "url": "base-london/base-london-julius-sandals-in-black-leather/prd/13910720?clr=&colourWayId=16575985",
            "imageUrl": "images.asos-media.com/products/base-london-julius-sandals-in-black-leather/13910720-1-black",
            "isSellingFast": false
        },
        {
            "id": 14175777,
            "name": "Hunter original sliders in black",
            "price": {
                "current": {
                    "value": 50,
                    "text": "$50.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16597091,
            "brandName": "Hunter",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1622967,
            "productType": "Product",
            "url": "hunter/hunter-original-sliders-in-black/prd/14175777?clr=&colourWayId=16597091",
            "imageUrl": "images.asos-media.com/products/hunter-original-sliders-in-black/14175777-1-black",
            "isSellingFast": false
        },
        {
            "id": 14175779,
            "name": "Hunter terry logo sliders in black and white",
            "price": {
                "current": {
                    "value": 58,
                    "text": "$58.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16597093,
            "brandName": "Hunter",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1622969,
            "productType": "Product",
            "url": "hunter/hunter-terry-logo-sliders-in-black-and-white/prd/14175779?clr=&colourWayId=16597093",
            "imageUrl": "images.asos-media.com/products/hunter-terry-logo-sliders-in-black-and-white/14175779-1-black",
            "isSellingFast": false
        },
        {
            "id": 13600937,
            "name": "PS Paul Smith Lemmy block color sneakers with contrast lace in white",
            "price": {
                "current": {
                    "value": 250,
                    "text": "$250.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16550557,
            "brandName": "PS Paul Smith",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1578990,
            "productType": "Product",
            "url": "ps-paul-smith/ps-paul-smith-lemmy-block-color-sneakers-with-contrast-lace-in-white/prd/13600937?clr=&colourWayId=16550557",
            "imageUrl": "images.asos-media.com/products/ps-paul-smith-lemmy-block-color-sneakers-with-contrast-lace-in-white/13600937-1-white",
            "isSellingFast": false
        },
        {
            "id": 13910731,
            "name": "Base London empire sandals tan leather",
            "price": {
                "current": {
                    "value": 64,
                    "text": "$64.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16576000,
            "brandName": "Base London",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1603351,
            "productType": "Product",
            "url": "base-london/base-london-empire-sandals-tan-leather/prd/13910731?clr=&colourWayId=16576000",
            "imageUrl": "images.asos-media.com/products/base-london-empire-sandals-tan-leather/13910731-1-tan",
            "isSellingFast": false
        },
        {
            "id": 14187300,
            "name": "ASOS DESIGN slip on mule espadrilles in black weave",
            "price": {
                "current": {
                    "value": 26,
                    "text": "$26.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16597961,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1623628,
            "productType": "Product",
            "url": "asos-design/asos-design-slip-on-mule-espadrilles-in-black-weave/prd/14187300?clr=&colourWayId=16597961",
            "imageUrl": "images.asos-media.com/products/asos-design-slip-on-mule-espadrilles-in-black-weave/14187300-1-black",
            "isSellingFast": false
        },
        {
            "id": 14187874,
            "name": "ASOS DESIGN espadrille sneakers in white",
            "price": {
                "current": {
                    "value": 35,
                    "text": "$35.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16598010,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1623673,
            "productType": "Product",
            "url": "asos-design/asos-design-espadrille-sneakers-in-white/prd/14187874?clr=&colourWayId=16598010",
            "imageUrl": "images.asos-media.com/products/asos-design-espadrille-sneakers-in-white/14187874-1-white",
            "isSellingFast": false
        },
        {
            "id": 14548591,
            "name": "River Island embossed sliders in blue",
            "price": {
                "current": {
                    "value": 25,
                    "text": "$25.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16624783,
            "brandName": "River Island",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1650167,
            "productType": "Product",
            "url": "river-island/river-island-embossed-sliders-in-blue/prd/14548591?clr=&colourWayId=16624783",
            "imageUrl": "images.asos-media.com/products/river-island-embossed-sliders-in-blue/14548591-1-blue",
            "isSellingFast": false
        },
        {
            "id": 14605098,
            "name": "Columbia sandal in black and red",
            "price": {
                "current": {
                    "value": 70,
                    "text": "$70.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16629499,
            "brandName": "Columbia",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1654950,
            "productType": "Product",
            "url": "columbia/columbia-sandal-in-black-and-red/prd/14605098?clr=&colourWayId=16629499",
            "imageUrl": "images.asos-media.com/products/columbia-sandal-in-black-and-red/14605098-1-black",
            "isSellingFast": false
        },
        {
            "id": 20226673,
            "name": "River Island leather woven loafer in black",
            "price": {
                "current": {
                    "value": 79,
                    "text": "$79.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 60019076,
            "brandName": "River Island",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1703838,
            "productType": "Product",
            "url": "river-island/river-island-leather-woven-loafer-in-black/prd/20226673?clr=&colourWayId=60019076",
            "imageUrl": "images.asos-media.com/products/river-island-leather-woven-loafer-in-black/20226673-1-black",
            "isSellingFast": false
        },
        {
            "id": 20289769,
            "name": "River Island color drench chunky sneakers in gray",
            "price": {
                "current": {
                    "value": 79,
                    "text": "$79.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 60040741,
            "brandName": "River Island",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1709269,
            "productType": "Product",
            "url": "river-island/river-island-color-drench-chunky-sneakers-in-gray/prd/20289769?clr=&colourWayId=60040741",
            "imageUrl": "images.asos-media.com/products/river-island-color-drench-chunky-sneakers-in-gray/20289769-1-grey",
            "isSellingFast": false
        },
        {
            "id": 13910022,
            "name": "Base London dougie desert shoes in beige suede",
            "price": {
                "current": {
                    "value": 87,
                    "text": "$87.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16575967,
            "brandName": "Base London",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1603319,
            "productType": "Product",
            "url": "base-london/base-london-dougie-desert-shoes-in-beige-suede/prd/13910022?clr=&colourWayId=16575967",
            "imageUrl": "images.asos-media.com/products/base-london-dougie-desert-shoes-in-beige-suede/13910022-1-beige",
            "isSellingFast": false
        },
        {
            "id": 14077834,
            "name": "ASOS DESIGN sliders with padded strap in black",
            "price": {
                "current": {
                    "value": 29,
                    "text": "$29.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16589778,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1615906,
            "productType": "Product",
            "url": "asos-design/asos-design-sliders-with-padded-strap-in-black/prd/14077834?clr=&colourWayId=16589778",
            "imageUrl": "images.asos-media.com/products/asos-design-sliders-with-padded-strap-in-black/14077834-1-black",
            "isSellingFast": false
        },
        {
            "id": 14097943,
            "name": "ASOS DESIGN tech sandals in gray",
            "price": {
                "current": {
                    "value": 29,
                    "text": "$29.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16591229,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1617346,
            "productType": "Product",
            "url": "asos-design/asos-design-tech-sandals-in-gray/prd/14097943?clr=&colourWayId=16591229",
            "imageUrl": "images.asos-media.com/products/asos-design-tech-sandals-in-gray/14097943-1-grey",
            "isSellingFast": false
        },
        {
            "id": 11362433,
            "name": "Nike Air Max 270 sneakers in black/blue",
            "price": {
                "current": {
                    "value": 150,
                    "text": "$150.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16303967,
            "brandName": "Nike",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1404418,
            "productType": "Product",
            "url": "nike/nike-air-max-270-sneakers-in-black-blue/prd/11362433?clr=&colourWayId=16303967",
            "imageUrl": "images.asos-media.com/products/nike-air-max-270-sneakers-in-black-blue/11362433-1-blue",
            "isSellingFast": false
        },
        {
            "id": 14081009,
            "name": "ASOS DESIGN loafers in gray suede with tassel on natural sole",
            "price": {
                "current": {
                    "value": 64,
                    "text": "$64.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16589992,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1616146,
            "productType": "Product",
            "url": "asos-design/asos-design-loafers-in-gray-suede-with-tassel-on-natural-sole/prd/14081009?clr=&colourWayId=16589992",
            "imageUrl": "images.asos-media.com/products/asos-design-loafers-in-gray-suede-with-tassel-on-natural-sole/14081009-1-grey",
            "isSellingFast": false
        },
        {
            "id": 20489463,
            "name": "Bershka sneaker in black",
            "price": {
                "current": {
                    "value": 46,
                    "text": "$46.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 60058225,
            "brandName": "Bershka",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1726029,
            "productType": "Product",
            "url": "bershka/bershka-sneaker-in-black/prd/20489463?clr=&colourWayId=60058225",
            "imageUrl": "images.asos-media.com/products/bershka-sneaker-in-black/20489463-1-black",
            "isSellingFast": false
        },
        {
            "id": 14291017,
            "name": "Reebok Classics leather sneakers with red vector in vintage white",
            "price": {
                "current": {
                    "value": 80,
                    "text": "$80.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16605574,
            "brandName": "Reebok Classics",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1631096,
            "productType": "Product",
            "url": "reebok-classics/reebok-classics-leather-sneakers-with-red-vector-in-vintage-white/prd/14291017?clr=&colourWayId=16605574",
            "imageUrl": "images.asos-media.com/products/reebok-classics-leather-sneakers-with-red-vector-in-vintage-white/14291017-1-offwhite",
            "isSellingFast": false
        },
        {
            "id": 14291108,
            "name": "Reebok Classics BB 4000 sneakers in lilac",
            "price": {
                "current": {
                    "value": 75,
                    "text": "$75.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16605579,
            "brandName": "Reebok Classics",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1631148,
            "productType": "Product",
            "url": "reebok-classics/reebok-classics-bb-4000-sneakers-in-lilac/prd/14291108?clr=&colourWayId=16605579",
            "imageUrl": "images.asos-media.com/products/reebok-classics-bb-4000-sneakers-in-lilac/14291108-1-lilac",
            "isSellingFast": false
        },
        {
            "id": 20157168,
            "name": "ASOS DESIGN chukka boots in black leather",
            "price": {
                "current": {
                    "value": 56,
                    "text": "$56.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 60013284,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1698147,
            "productType": "Product",
            "url": "asos-design/asos-design-chukka-boots-in-black-leather/prd/20157168?clr=&colourWayId=60013284",
            "imageUrl": "images.asos-media.com/products/asos-design-chukka-boots-in-black-leather/20157168-1-black",
            "isSellingFast": false
        },
        {
            "id": 13905719,
            "name": "TOMS espadrilles recycled bottles gray/blue",
            "price": {
                "current": {
                    "value": 61,
                    "text": "$61.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16575601,
            "brandName": "Toms",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1603134,
            "productType": "Product",
            "url": "toms/toms-espadrilles-recycled-bottles-gray-blue/prd/13905719?clr=&colourWayId=16575601",
            "imageUrl": "images.asos-media.com/products/toms-espadrilles-recycled-bottles-gray-blue/13905719-1-grey",
            "isSellingFast": false
        },
        {
            "id": 14080699,
            "name": "ASOS DESIGN derby shoes in tan suede",
            "price": {
                "current": {
                    "value": 64,
                    "text": "$64.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16589983,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1616132,
            "productType": "Product",
            "url": "asos-design/asos-design-derby-shoes-in-tan-suede/prd/14080699?clr=&colourWayId=16589983",
            "imageUrl": "images.asos-media.com/products/asos-design-derby-shoes-in-tan-suede/14080699-1-tan",
            "isSellingFast": false
        },
        {
            "id": 14080704,
            "name": "ASOS DESIGN Wide Fit lace up shoes in black suede with contrast sole",
            "price": {
                "current": {
                    "value": 56,
                    "text": "$56.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16589980,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1616126,
            "productType": "Product",
            "url": "asos-design/asos-design-wide-fit-lace-up-shoes-in-black-suede-with-contrast-sole/prd/14080704?clr=&colourWayId=16589980",
            "imageUrl": "images.asos-media.com/products/asos-design-wide-fit-lace-up-shoes-in-black-suede-with-contrast-sole/14080704-1-black",
            "isSellingFast": false
        },
        {
            "id": 14276925,
            "name": "adidas Originals Adilette slides in navy",
            "price": {
                "current": {
                    "value": 45,
                    "text": "$45.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16604619,
            "brandName": "adidas Originals",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1630437,
            "productType": "Product",
            "url": "adidas-originals/adidas-originals-adilette-slides-in-navy/prd/14276925?clr=&colourWayId=16604619",
            "imageUrl": "images.asos-media.com/products/adidas-originals-adilette-slides-in-navy/14276925-1-navy",
            "isSellingFast": false
        },
        {
            "id": 14379211,
            "name": "Nokwol mesh running chunky sneakers in black",
            "price": {
                "current": {
                    "value": 87.5,
                    "text": "$87.50"
                },
                "previous": {
                    "value": 125,
                    "text": "$125.00"
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": true,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16611978,
            "brandName": "Nokwol",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1636891,
            "productType": "Product",
            "url": "nokwol/nokwol-mesh-running-chunky-sneakers-in-black/prd/14379211?clr=&colourWayId=16611978",
            "imageUrl": "images.asos-media.com/products/nokwol-mesh-running-chunky-sneakers-in-black/14379211-1-black",
            "isSellingFast": false
        },
        {
            "id": 14187896,
            "name": "ASOS DESIGN espadrilles in striped canvas",
            "price": {
                "current": {
                    "value": 19,
                    "text": "$19.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16598001,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1623691,
            "productType": "Product",
            "url": "asos-design/asos-design-espadrilles-in-striped-canvas/prd/14187896?clr=&colourWayId=16598001",
            "imageUrl": "images.asos-media.com/products/asos-design-espadrilles-in-striped-canvas/14187896-1-stone",
            "isSellingFast": false
        },
        {
            "id": 14379203,
            "name": "Nokwol reaper chunky sneakers in distressed black",
            "price": {
                "current": {
                    "value": 125,
                    "text": "$125.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16611981,
            "brandName": "Nokwol",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1636901,
            "productType": "Product",
            "url": "nokwol/nokwol-reaper-chunky-sneakers-in-distressed-black/prd/14379203?clr=&colourWayId=16611981",
            "imageUrl": "images.asos-media.com/products/nokwol-reaper-chunky-sneakers-in-distressed-black/14379203-1-black",
            "isSellingFast": false
        },
        {
            "id": 14379213,
            "name": "Nokwol mesh running chunky sneakers in white",
            "price": {
                "current": {
                    "value": 125,
                    "text": "$125.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16611972,
            "brandName": "Nokwol",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1636876,
            "productType": "Product",
            "url": "nokwol/nokwol-mesh-running-chunky-sneakers-in-white/prd/14379213?clr=&colourWayId=16611972",
            "imageUrl": "images.asos-media.com/products/nokwol-mesh-running-chunky-sneakers-in-white/14379213-1-white",
            "isSellingFast": false
        },
        {
            "id": 14187323,
            "name": "ASOS DESIGN espadrilles in tan basket weave",
            "price": {
                "current": {
                    "value": 19,
                    "text": "$19.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16597978,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1623583,
            "productType": "Product",
            "url": "asos-design/asos-design-espadrilles-in-tan-basket-weave/prd/14187323?clr=&colourWayId=16597978",
            "imageUrl": "images.asos-media.com/products/asos-design-espadrilles-in-tan-basket-weave/14187323-1-tan",
            "isSellingFast": false
        },
        {
            "id": 14187327,
            "name": "ASOS DESIGN slip on mule espadrilles in mini stripe",
            "price": {
                "current": {
                    "value": 26,
                    "text": "$26.00"
                },
                "previous": {
                    "value": null,
                    "text": ""
                },
                "rrp": {
                    "value": null,
                    "text": ""
                },
                "isMarkedDown": false,
                "isOutletPrice": false,
                "currency": "USD"
            },
            "colour": "",
            "colourWayId": 16597967,
            "brandName": "ASOS DESIGN",
            "hasVariantColours": false,
            "hasMultiplePrices": false,
            "groupId": null,
            "productCode": 1623596,
            "productType": "Product",
            "url": "asos-design/asos-design-slip-on-mule-espadrilles-in-mini-stripe/prd/14187327?clr=&colourWayId=16597967",
            "imageUrl": "images.asos-media.com/products/asos-design-slip-on-mule-espadrilles-in-mini-stripe/14187327-1-black",
            "isSellingFast": false
        }
    ],
    "facets": [
        {
            "id": "floor",
            "name": "Gender",
            "facetValues": [
                {
                    "count": 1402,
                    "id": "1001",
                    "name": "Men",
                    "isSelected": false
                },
                {
                    "count": 31,
                    "id": "1000",
                    "name": "Women",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "attribute_1047",
            "name": "Product Type",
            "facetValues": [
                {
                    "count": 182,
                    "id": "8585",
                    "name": "Boots",
                    "isSelected": false
                },
                {
                    "count": 16,
                    "id": "10775",
                    "name": "Flip Flops",
                    "isSelected": false
                },
                {
                    "count": 36,
                    "id": "8600",
                    "name": "Sandals",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "9799",
                    "name": "Shoe Accessories",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "8583",
                    "name": "Shoe Care Kits",
                    "isSelected": false
                },
                {
                    "count": 330,
                    "id": "8609",
                    "name": "Shoes",
                    "isSelected": false
                },
                {
                    "count": 48,
                    "id": "10774",
                    "name": "Sliders",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "8597",
                    "name": "Slippers",
                    "isSelected": false
                },
                {
                    "count": 772,
                    "id": "8606",
                    "name": "Sneakers",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "9313",
                    "name": "Soccer Boots",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "8589",
                    "name": "Wellies",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "attribute_1046",
            "name": "Style",
            "facetValues": [
                {
                    "count": 6,
                    "id": "8222",
                    "name": "Ankle",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "10788",
                    "name": "Boat Shoes",
                    "isSelected": false
                },
                {
                    "count": 64,
                    "id": "8620",
                    "name": "Brogue",
                    "isSelected": false
                },
                {
                    "count": 71,
                    "id": "8629",
                    "name": "Chelsea",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "8631",
                    "name": "Chukka",
                    "isSelected": false
                },
                {
                    "count": 31,
                    "id": "8317",
                    "name": "Chunky",
                    "isSelected": false
                },
                {
                    "count": 49,
                    "id": "8634",
                    "name": "Derby",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "8615",
                    "name": "Desert",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "8618",
                    "name": "Driver",
                    "isSelected": false
                },
                {
                    "count": 34,
                    "id": "8621",
                    "name": "Espadrilles",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "8188",
                    "name": "Flat",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "62002",
                    "name": "Flatform",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "8627",
                    "name": "Gladiator",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "8642",
                    "name": "Heeled",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "10808",
                    "name": "Hiking Boots",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "8630",
                    "name": "Hi Top",
                    "isSelected": false
                },
                {
                    "count": 122,
                    "id": "8633",
                    "name": "Loafer",
                    "isSelected": false
                },
                {
                    "count": 20,
                    "id": "8327",
                    "name": "Military",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "10800",
                    "name": "Monk Strap",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "8648",
                    "name": "Mule",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "8646",
                    "name": "Open Toe",
                    "isSelected": false
                },
                {
                    "count": 105,
                    "id": "61468",
                    "name": "Other",
                    "isSelected": false
                },
                {
                    "count": 19,
                    "id": "8427",
                    "name": "Oxford",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "62003",
                    "name": "Platform",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "10794",
                    "name": "Shoe Boots",
                    "isSelected": false
                },
                {
                    "count": 32,
                    "id": "8616",
                    "name": "Sneaker",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "8210",
                    "name": "Western",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "attribute_10147",
            "name": "Leather / Non Leather",
            "facetValues": [
                {
                    "count": 562,
                    "id": "2244",
                    "name": "Leather",
                    "isSelected": false
                },
                {
                    "count": 835,
                    "id": "2256",
                    "name": "Non Leather",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "base_colour",
            "name": "Color",
            "facetValues": [
                {
                    "count": 20,
                    "id": "25",
                    "name": "Beige",
                    "isSelected": false
                },
                {
                    "count": 611,
                    "id": "4",
                    "name": "Black",
                    "isSelected": false
                },
                {
                    "count": 25,
                    "id": "3",
                    "name": "Blue",
                    "isSelected": false
                },
                {
                    "count": 99,
                    "id": "10",
                    "name": "Brown",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "15",
                    "name": "Clear",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "20",
                    "name": "Cream",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "11",
                    "name": "Gold",
                    "isSelected": false
                },
                {
                    "count": 77,
                    "id": "16",
                    "name": "Gray",
                    "isSelected": false
                },
                {
                    "count": 37,
                    "id": "2",
                    "name": "Green",
                    "isSelected": false
                },
                {
                    "count": 35,
                    "id": "17",
                    "name": "Multi",
                    "isSelected": false
                },
                {
                    "count": 50,
                    "id": "33",
                    "name": "Navy",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "21",
                    "name": "No Color",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "7",
                    "name": "Orange",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "9",
                    "name": "Pink",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "8",
                    "name": "Purple",
                    "isSelected": false
                },
                {
                    "count": 45,
                    "id": "1",
                    "name": "Red",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "12",
                    "name": "Silver",
                    "isSelected": false
                },
                {
                    "count": 19,
                    "id": "13",
                    "name": "Stone",
                    "isSelected": false
                },
                {
                    "count": 51,
                    "id": "26",
                    "name": "Tan",
                    "isSelected": false
                },
                {
                    "count": 284,
                    "id": "5",
                    "name": "White",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "6",
                    "name": "Yellow",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "brand",
            "name": "Brand",
            "facetValues": [
                {
                    "count": 363,
                    "id": "53",
                    "name": "ASOS DESIGN",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "15719",
                    "name": "ASOS EDITION",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "12919",
                    "name": "ASOS WHITE",
                    "isSelected": false
                },
                {
                    "count": 123,
                    "id": "18",
                    "name": "adidas Originals",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "16346",
                    "name": "adidas performance",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "13688",
                    "name": "Asics",
                    "isSelected": false
                },
                {
                    "count": 18,
                    "id": "12311",
                    "name": "Base London",
                    "isSelected": false
                },
                {
                    "count": 23,
                    "id": "15370",
                    "name": "Bershka",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "298",
                    "name": "BOSS",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "105",
                    "name": "Calvin Klein",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "13656",
                    "name": "Cat Footwear",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "15059",
                    "name": "Columbia",
                    "isSelected": false
                },
                {
                    "count": 32,
                    "id": "131",
                    "name": "Converse",
                    "isSelected": false
                },
                {
                    "count": 71,
                    "id": "3180",
                    "name": "Dr Martens",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "14722",
                    "name": "EA7",
                    "isSelected": false
                },
                {
                    "count": 11,
                    "id": "14116",
                    "name": "ellesse",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "3060",
                    "name": "Emporio Armani",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "202",
                    "name": "Fila",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "2943",
                    "name": "Fred Perry",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "274",
                    "name": "Havaianas",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "13840",
                    "name": "House of Hounds",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "15139",
                    "name": "HUGO",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "3179",
                    "name": "Hunter",
                    "isSelected": false
                },
                {
                    "count": 27,
                    "id": "12461",
                    "name": "Jack & Jones",
                    "isSelected": false
                },
                {
                    "count": 18,
                    "id": "3439",
                    "name": "Jeffery West",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "14508",
                    "name": "Kappa",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "12431",
                    "name": "Kickers",
                    "isSelected": false
                },
                {
                    "count": 34,
                    "id": "391",
                    "name": "Lacoste",
                    "isSelected": false
                },
                {
                    "count": 15,
                    "id": "15532",
                    "name": "MOSS BROS",
                    "isSelected": false
                },
                {
                    "count": 30,
                    "id": "499",
                    "name": "New Balance",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "13817",
                    "name": "New Look",
                    "isSelected": false
                },
                {
                    "count": 79,
                    "id": "2986",
                    "name": "Nike",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "15950",
                    "name": "Nike Basketball",
                    "isSelected": false
                },
                {
                    "count": 18,
                    "id": "15176",
                    "name": "Nike Running",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "13623",
                    "name": "Nike SB",
                    "isSelected": false
                },
                {
                    "count": 18,
                    "id": "15177",
                    "name": "Nike Training",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "16278",
                    "name": "Nokwol",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "15010",
                    "name": "Office",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "12455",
                    "name": "Palladium",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "3594",
                    "name": "Polo Ralph Lauren",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "13872",
                    "name": "PS Paul Smith",
                    "isSelected": false
                },
                {
                    "count": 28,
                    "id": "14126",
                    "name": "Pull&Bear",
                    "isSelected": false
                },
                {
                    "count": 37,
                    "id": "589",
                    "name": "Puma",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "3375",
                    "name": "Red Wing",
                    "isSelected": false
                },
                {
                    "count": 62,
                    "id": "2988",
                    "name": "Reebok",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "16284",
                    "name": "Reebok Classics",
                    "isSelected": false
                },
                {
                    "count": 33,
                    "id": "12983",
                    "name": "River Island",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "14159",
                    "name": "Selected Homme",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "712",
                    "name": "Ted Baker",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "14550",
                    "name": "Teva",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "3312",
                    "name": "The North Face",
                    "isSelected": false
                },
                {
                    "count": 23,
                    "id": "3672",
                    "name": "Timberland",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "3029",
                    "name": "Tommy Hilfiger",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "15631",
                    "name": "Tommy Jeans",
                    "isSelected": false
                },
                {
                    "count": 11,
                    "id": "3659",
                    "name": "Toms",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "15831",
                    "name": "Twisted Tailor",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "752",
                    "name": "UGG",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "15203",
                    "name": "Under Armour",
                    "isSelected": false
                },
                {
                    "count": 89,
                    "id": "765",
                    "name": "Vans",
                    "isSelected": false
                },
                {
                    "count": 43,
                    "id": "14712",
                    "name": "WALK LONDON",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "attribute_10155",
            "name": "Body Fit",
            "facetValues": [
                {
                    "count": 1305,
                    "id": "6764",
                    "name": "Main Collection",
                    "isSelected": false
                },
                {
                    "count": 95,
                    "id": "7504",
                    "name": "Wide Fit",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "size",
            "name": "Size",
            "facetValues": [
                {
                    "count": 2,
                    "id": "1853",
                    "name": "US 5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "2311",
                    "name": "US 6",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "2079",
                    "name": "US 7",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "1972",
                    "name": "US 8.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "2315",
                    "name": "US 12.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "2133",
                    "name": "14.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "2338",
                    "name": "US 4",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "2336",
                    "name": "US 4.5",
                    "isSelected": false
                },
                {
                    "count": 87,
                    "id": "2340",
                    "name": "US 5",
                    "isSelected": false
                },
                {
                    "count": 68,
                    "id": "2466",
                    "name": "US 5.5",
                    "isSelected": false
                },
                {
                    "count": 299,
                    "id": "2339",
                    "name": "US 6",
                    "isSelected": false
                },
                {
                    "count": 116,
                    "id": "2333",
                    "name": "US 6.5",
                    "isSelected": false
                },
                {
                    "count": 885,
                    "id": "2332",
                    "name": "US 7",
                    "isSelected": false
                },
                {
                    "count": 227,
                    "id": "2329",
                    "name": "US 7.5",
                    "isSelected": false
                },
                {
                    "count": 983,
                    "id": "2325",
                    "name": "US 8",
                    "isSelected": false
                },
                {
                    "count": 325,
                    "id": "2334",
                    "name": "US 8.5",
                    "isSelected": false
                },
                {
                    "count": 977,
                    "id": "2337",
                    "name": "US 9",
                    "isSelected": false
                },
                {
                    "count": 345,
                    "id": "2328",
                    "name": "US 9.5",
                    "isSelected": false
                },
                {
                    "count": 997,
                    "id": "2331",
                    "name": "US 10",
                    "isSelected": false
                },
                {
                    "count": 286,
                    "id": "1855",
                    "name": "US 10.5",
                    "isSelected": false
                },
                {
                    "count": 932,
                    "id": "2323",
                    "name": "US 11",
                    "isSelected": false
                },
                {
                    "count": 293,
                    "id": "2034",
                    "name": "US 11.5",
                    "isSelected": false
                },
                {
                    "count": 854,
                    "id": "2324",
                    "name": "US 12",
                    "isSelected": false
                },
                {
                    "count": 109,
                    "id": "1875",
                    "name": "US 12.5",
                    "isSelected": false
                },
                {
                    "count": 641,
                    "id": "2326",
                    "name": "US 13",
                    "isSelected": false
                },
                {
                    "count": 31,
                    "id": "1945",
                    "name": "US 13.5",
                    "isSelected": false
                },
                {
                    "count": 171,
                    "id": "2310",
                    "name": "US 14",
                    "isSelected": false
                },
                {
                    "count": 20,
                    "id": "2385",
                    "name": "US 15",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "1917",
                    "name": "One Size",
                    "isSelected": false
                }
            ],
            "displayStyle": "Single-Column",
            "facetType": "TextMultiSelect",
            "hasSelectedValues": false
        },
        {
            "id": "currentprice",
            "name": "Price Range",
            "facetValues": [
                {
                    "count": 1,
                    "id": "7.6",
                    "name": "7.6",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "8.55",
                    "name": "8.55",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "9.5",
                    "name": "9.5",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "13.0",
                    "name": "13.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "13.6",
                    "name": "13.6",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "14.25",
                    "name": "14.25",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "16.0",
                    "name": "16.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "16.15",
                    "name": "16.15",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "17.1",
                    "name": "17.1",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "18.0",
                    "name": "18.0",
                    "isSelected": false
                },
                {
                    "count": 21,
                    "id": "19.0",
                    "name": "19.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "20.3",
                    "name": "20.3",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "21.75",
                    "name": "21.75",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "22.4",
                    "name": "22.4",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "23.0",
                    "name": "23.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "23.2",
                    "name": "23.2",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "23.8",
                    "name": "23.8",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "24.5",
                    "name": "24.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "24.65",
                    "name": "24.65",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "25.0",
                    "name": "25.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "25.6",
                    "name": "25.6",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "26.0",
                    "name": "26.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "26.1",
                    "name": "26.1",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "27.2",
                    "name": "27.2",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "28.0",
                    "name": "28.0",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "29.0",
                    "name": "29.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "29.25",
                    "name": "29.25",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "30.0",
                    "name": "30.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "30.8",
                    "name": "30.8",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "31.0",
                    "name": "31.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "31.5",
                    "name": "31.5",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "32.0",
                    "name": "32.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "33.15",
                    "name": "33.15",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "33.6",
                    "name": "33.6",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "33.75",
                    "name": "33.75",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "34.0",
                    "name": "34.0",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "35.0",
                    "name": "35.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "35.5",
                    "name": "35.5",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "35.7",
                    "name": "35.7",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "36.0",
                    "name": "36.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "37.0",
                    "name": "37.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "37.4",
                    "name": "37.4",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "37.5",
                    "name": "37.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "37.6",
                    "name": "37.6",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "38.0",
                    "name": "38.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "38.25",
                    "name": "38.25",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "38.4",
                    "name": "38.4",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "39.0",
                    "name": "39.0",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "39.2",
                    "name": "39.2",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "39.6",
                    "name": "39.6",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "39.95",
                    "name": "39.95",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "40.0",
                    "name": "40.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "40.5",
                    "name": "40.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "40.8",
                    "name": "40.8",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "42.0",
                    "name": "42.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "42.05",
                    "name": "42.05",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "42.3",
                    "name": "42.3",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "42.5",
                    "name": "42.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "43.0",
                    "name": "43.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "43.2",
                    "name": "43.2",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "43.35",
                    "name": "43.35",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "43.4",
                    "name": "43.4",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "44.0",
                    "name": "44.0",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "44.8",
                    "name": "44.8",
                    "isSelected": false
                },
                {
                    "count": 16,
                    "id": "45.0",
                    "name": "45.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "45.9",
                    "name": "45.9",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "46.0",
                    "name": "46.0",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "47.0",
                    "name": "47.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "47.6",
                    "name": "47.6",
                    "isSelected": false
                },
                {
                    "count": 22,
                    "id": "48.0",
                    "name": "48.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "49.0",
                    "name": "49.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "49.5",
                    "name": "49.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "49.6",
                    "name": "49.6",
                    "isSelected": false
                },
                {
                    "count": 29,
                    "id": "50.0",
                    "name": "50.0",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "50.4",
                    "name": "50.4",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "50.5",
                    "name": "50.5",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "51.0",
                    "name": "51.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "51.2",
                    "name": "51.2",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "51.8",
                    "name": "51.8",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "52.0",
                    "name": "52.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "52.5",
                    "name": "52.5",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "53.0",
                    "name": "53.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "53.25",
                    "name": "53.25",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "54.0",
                    "name": "54.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "54.4",
                    "name": "54.4",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "55.0",
                    "name": "55.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "55.25",
                    "name": "55.25",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "55.5",
                    "name": "55.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "55.8",
                    "name": "55.8",
                    "isSelected": false
                },
                {
                    "count": 23,
                    "id": "56.0",
                    "name": "56.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "56.25",
                    "name": "56.25",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "57.6",
                    "name": "57.6",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "58.0",
                    "name": "58.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "58.5",
                    "name": "58.5",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "59.5",
                    "name": "59.5",
                    "isSelected": false
                },
                {
                    "count": 38,
                    "id": "60.0",
                    "name": "60.0",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "60.9",
                    "name": "60.9",
                    "isSelected": false
                },
                {
                    "count": 14,
                    "id": "61.0",
                    "name": "61.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "61.2",
                    "name": "61.2",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "61.6",
                    "name": "61.6",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "62.0",
                    "name": "62.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "63.0",
                    "name": "63.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "63.2",
                    "name": "63.2",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "63.75",
                    "name": "63.75",
                    "isSelected": false
                },
                {
                    "count": 24,
                    "id": "64.0",
                    "name": "64.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "64.6",
                    "name": "64.6",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "64.8",
                    "name": "64.8",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "64.95",
                    "name": "64.95",
                    "isSelected": false
                },
                {
                    "count": 31,
                    "id": "65.0",
                    "name": "65.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "65.25",
                    "name": "65.25",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "66.0",
                    "name": "66.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "67.0",
                    "name": "67.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "67.5",
                    "name": "67.5",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "68.0",
                    "name": "68.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "68.85",
                    "name": "68.85",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "69.3",
                    "name": "69.3",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "69.6",
                    "name": "69.6",
                    "isSelected": false
                },
                {
                    "count": 34,
                    "id": "70.0",
                    "name": "70.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "70.4",
                    "name": "70.4",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "70.7",
                    "name": "70.7",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "71.0",
                    "name": "71.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "71.1",
                    "name": "71.1",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "71.25",
                    "name": "71.25",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "71.5",
                    "name": "71.5",
                    "isSelected": false
                },
                {
                    "count": 27,
                    "id": "72.0",
                    "name": "72.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "72.9",
                    "name": "72.9",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "73.5",
                    "name": "73.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "73.95",
                    "name": "73.95",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "74.0",
                    "name": "74.0",
                    "isSelected": false
                },
                {
                    "count": 36,
                    "id": "75.0",
                    "name": "75.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "76.0",
                    "name": "76.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "76.3",
                    "name": "76.3",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "76.5",
                    "name": "76.5",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "77.0",
                    "name": "77.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "77.25",
                    "name": "77.25",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "78.0",
                    "name": "78.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "78.75",
                    "name": "78.75",
                    "isSelected": false
                },
                {
                    "count": 13,
                    "id": "79.0",
                    "name": "79.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "79.2",
                    "name": "79.2",
                    "isSelected": false
                },
                {
                    "count": 63,
                    "id": "80.0",
                    "name": "80.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "80.5",
                    "name": "80.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "80.8",
                    "name": "80.8",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "81.0",
                    "name": "81.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "81.75",
                    "name": "81.75",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "82.5",
                    "name": "82.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "83.25",
                    "name": "83.25",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "83.3",
                    "name": "83.3",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "84.0",
                    "name": "84.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "84.5",
                    "name": "84.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "84.95",
                    "name": "84.95",
                    "isSelected": false
                },
                {
                    "count": 29,
                    "id": "85.0",
                    "name": "85.0",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "87.0",
                    "name": "87.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "87.5",
                    "name": "87.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "87.55",
                    "name": "87.55",
                    "isSelected": false
                },
                {
                    "count": 18,
                    "id": "88.0",
                    "name": "88.0",
                    "isSelected": false
                },
                {
                    "count": 38,
                    "id": "90.0",
                    "name": "90.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "90.9",
                    "name": "90.9",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "91.0",
                    "name": "91.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "91.5",
                    "name": "91.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "91.7",
                    "name": "91.7",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "92.0",
                    "name": "92.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "92.65",
                    "name": "92.65",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "93.0",
                    "name": "93.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "93.5",
                    "name": "93.5",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "94.0",
                    "name": "94.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "94.5",
                    "name": "94.5",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "95.0",
                    "name": "95.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "96.0",
                    "name": "96.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "97.2",
                    "name": "97.2",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "97.5",
                    "name": "97.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "98.1",
                    "name": "98.1",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "99.0",
                    "name": "99.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "99.9",
                    "name": "99.9",
                    "isSelected": false
                },
                {
                    "count": 26,
                    "id": "100.0",
                    "name": "100.0",
                    "isSelected": false
                },
                {
                    "count": 7,
                    "id": "101.0",
                    "name": "101.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "101.15",
                    "name": "101.15",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "101.5",
                    "name": "101.5",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "102.0",
                    "name": "102.0",
                    "isSelected": false
                },
                {
                    "count": 12,
                    "id": "103.0",
                    "name": "103.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "104.0",
                    "name": "104.0",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "105.0",
                    "name": "105.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "108.0",
                    "name": "108.0",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "109.0",
                    "name": "109.0",
                    "isSelected": false
                },
                {
                    "count": 29,
                    "id": "110.0",
                    "name": "110.0",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "111.0",
                    "name": "111.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "112.5",
                    "name": "112.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "113.0",
                    "name": "113.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "114.75",
                    "name": "114.75",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "115.0",
                    "name": "115.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "117.0",
                    "name": "117.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "118.0",
                    "name": "118.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "119.0",
                    "name": "119.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "119.85",
                    "name": "119.85",
                    "isSelected": false
                },
                {
                    "count": 25,
                    "id": "120.0",
                    "name": "120.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "120.8",
                    "name": "120.8",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "121.0",
                    "name": "121.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "121.5",
                    "name": "121.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "124.0",
                    "name": "124.0",
                    "isSelected": false
                },
                {
                    "count": 10,
                    "id": "125.0",
                    "name": "125.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "126.8",
                    "name": "126.8",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "126.9",
                    "name": "126.9",
                    "isSelected": false
                },
                {
                    "count": 8,
                    "id": "127.0",
                    "name": "127.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "127.5",
                    "name": "127.5",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "128.0",
                    "name": "128.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "129.0",
                    "name": "129.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "129.6",
                    "name": "129.6",
                    "isSelected": false
                },
                {
                    "count": 32,
                    "id": "130.0",
                    "name": "130.0",
                    "isSelected": false
                },
                {
                    "count": 11,
                    "id": "135.0",
                    "name": "135.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "136.0",
                    "name": "136.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "137.0",
                    "name": "137.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "139.0",
                    "name": "139.0",
                    "isSelected": false
                },
                {
                    "count": 18,
                    "id": "140.0",
                    "name": "140.0",
                    "isSelected": false
                },
                {
                    "count": 6,
                    "id": "143.0",
                    "name": "143.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "145.0",
                    "name": "145.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "146.0",
                    "name": "146.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "147.0",
                    "name": "147.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "148.0",
                    "name": "148.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "148.75",
                    "name": "148.75",
                    "isSelected": false
                },
                {
                    "count": 19,
                    "id": "150.0",
                    "name": "150.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "151.0",
                    "name": "151.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "153.0",
                    "name": "153.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "155.0",
                    "name": "155.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "156.0",
                    "name": "156.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "158.0",
                    "name": "158.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "159.0",
                    "name": "159.0",
                    "isSelected": false
                },
                {
                    "count": 15,
                    "id": "160.0",
                    "name": "160.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "162.0",
                    "name": "162.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "165.0",
                    "name": "165.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "170.0",
                    "name": "170.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "173.0",
                    "name": "173.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "175.0",
                    "name": "175.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "175.5",
                    "name": "175.5",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "176.0",
                    "name": "176.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "178.0",
                    "name": "178.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "179.0",
                    "name": "179.0",
                    "isSelected": false
                },
                {
                    "count": 9,
                    "id": "180.0",
                    "name": "180.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "182.0",
                    "name": "182.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "187.2",
                    "name": "187.2",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "188.0",
                    "name": "188.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "190.0",
                    "name": "190.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "191.0",
                    "name": "191.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "196.0",
                    "name": "196.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "198.0",
                    "name": "198.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "200.0",
                    "name": "200.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "202.5",
                    "name": "202.5",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "204.0",
                    "name": "204.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "205.0",
                    "name": "205.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "208.0",
                    "name": "208.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "209.0",
                    "name": "209.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "215.0",
                    "name": "215.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "219.0",
                    "name": "219.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "225.0",
                    "name": "225.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "226.0",
                    "name": "226.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "229.0",
                    "name": "229.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "235.0",
                    "name": "235.0",
                    "isSelected": false
                },
                {
                    "count": 3,
                    "id": "239.0",
                    "name": "239.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "242.0",
                    "name": "242.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "245.0",
                    "name": "245.0",
                    "isSelected": false
                },
                {
                    "count": 5,
                    "id": "248.0",
                    "name": "248.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "249.0",
                    "name": "249.0",
                    "isSelected": false
                },
                {
                    "count": 4,
                    "id": "250.0",
                    "name": "250.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "256.0",
                    "name": "256.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "269.0",
                    "name": "269.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "276.0",
                    "name": "276.0",
                    "isSelected": false
                },
                {
                    "count": 2,
                    "id": "289.0",
                    "name": "289.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "303.0",
                    "name": "303.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "323.0",
                    "name": "323.0",
                    "isSelected": false
                },
                {
                    "count": 1,
                    "id": "425.0",
                    "name": "425.0",
                    "isSelected": false
                }
            ],
            "displayStyle": "Price-Slider",
            "facetType": "Range",
            "hasSelectedValues": false
        }
    ],
    "diagnostics": {
        "requestId": "14749",
        "processingTime": 204,
        "queryTime": 50,
        "recommendationsEnabled": false,
        "recommendationsAnalytics": {
            "personalisationStatus": 4,
            "numberOfItems": 0,
            "personalisationType": "",
            "items": {
            }
        }
    },
    "searchPassMeta": {
        "isPartial": false,
        "isSpellcheck": false,
        "searchPass": {
        },
        "alternateSearchTerms": {
        }
    },
    "queryId": null,
    "discoverSearchProductTypes": {
    },
    "campaigns": {
        "promoBanners": {
        }
    }
}




export default fetchData;