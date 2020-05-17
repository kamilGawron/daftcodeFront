import axios from 'axios'



const fetchData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US', {
            headers: {
                "x-rapidapi-host": "asos2.p.rapidapi.com",
                "x-rapidapi-key": "181b612297mshd0e7e19beb1bc7fp1b8e4fjsnfe7f21eb28e8"
            }
        }).then(res => {
            const products = [];
            res.data.products.forEach(element => {
                products.push({
                    name: element.brandName,
                    price: element.price.current.value,
                    imageUrl: element.imageUrl,
                    currency: element.price.currency
                })
            });
            resolve(products);
        }).catch(err => { reject() })

    })

}
export default fetchData;