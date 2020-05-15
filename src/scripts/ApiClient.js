const axios = require('axios');

export default function getProducts () {
    return axios.get("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=20&store=US",
        { "method": "GET",
            "headers": {
                "x-rapidapi-host": "asos2.p.rapidapi.com",
                "x-rapidapi-key": "d983492c8emsh061456a1bc3eb93p11399bjsnc9a87768c791"
            }})
        .then( response => {
                return  response.data
            }
        ).catch(error => console.log(error))
}
