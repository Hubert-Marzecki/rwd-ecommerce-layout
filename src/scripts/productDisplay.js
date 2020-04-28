// import moreProducts from './product'
import hear from "../assets/kz-heart.png"
import bolt from "../assets/kz-bolt-line.png"
import productsApi from "./product"

const allProducts = () => {
    const  productsApi = [


        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Eye Mesh Boat Shoes',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: '',
                image: null,
            },
            name: 'Backpack with contrasting buckle',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Backpack with contrasting buckle',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: '',
                image: null,
            },
            name: 'Backpack with contrasting buckle',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Eye Mesh Boat Shoes',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Azure Tote',
            price: 290,

        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: '',
                image: null,
            },
            name: 'Backpack with contrasting buckle',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Backpack with contrasting buckle',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Eye Mesh Boat Shoes',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Azure Tote',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: '',
                image: null,
            },
            name: 'Blue Raincoat',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Backpack with contrasting buckle',
            price: 220,
        },
        {
            img: 'https://via.placeholder.com/309x390',
            badge: {
                name: 'new',
                image: bolt,
            },
            name: 'Eye Mesh Boat Shoes',
            price: 220,
        },
        {
            img: "https://via.placeholder.com/309x390",
            badge: {
                name: '',
                image: '../assets/kz-bolt-lint.png'
            },
            name: 'Azure Tote',
            price: 220,

        },
    ];
    const containerProducts = document.querySelector('.items-grid');
    const btn = document.querySelector(".call-to-action");
    let limit = 8;
    let offset = 0;


    btn.onclick=()=>{
        let newOffset = offset + limit;
        showProducts(newOffset, newOffset + limit);
        if( productsApi.length <= newOffset + limit){
            btn.disabled=true;
        }
    }

    function showProducts(offset,limit) {

        let productsHolder =  containerProducts.innerHTML;
        let elements = productsApi.slice(offset,offset + limit);

        elements.forEach(item => {
            productsHolder += `
        <div class="col-sm-3 col-6  galery-product-item">
          <img class="product-image" src=${item.img} alt="product img">
          <ul class="list-unstyled text-left  item-info">
        <li class="galery-product-badge">
          <img src=${item.badge.image} alt="">
         ${item.badge.name} 
          </li>
        <li class="galery-product-name ">
        ${item.name}
        </li>
        <li class="galery-product-price">
          ${item.price}
        </li>
        <li class="galery-product-cart">
          ADD TO CART
           <img class="hearth float-right mr-1" src=${hear} alt="heart">
        </li>
        </ul>
        </div>
      `
        });

        containerProducts.innerHTML = productsHolder;

    };
    showProducts(offset, offset+ limit);

}
export default allProducts();