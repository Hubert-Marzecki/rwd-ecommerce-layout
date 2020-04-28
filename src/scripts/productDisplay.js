import heart from "../assets/kz-heart.png"
import bolt from "../assets/kz-bolt-line.png"
import productsApiTemplate from "./products";

export default function allProducts () {
    const productsApi = productsApiTemplate()

    const containerProducts = document.querySelector('.items-grid');
    const btn = document.querySelector(".call-to-action");
    
    let limit = 8;
    let offset = 0;

    function productGallery(offset,limit) {

        let productsHolder =  containerProducts.innerHTML;
        let visibleItems = productsApi.slice(offset,offset + limit);

        visibleItems.forEach(item => {
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
           <img class="hearth float-right mr-1" src=${heart} alt="heart">
        </li>
        </ul>
        </div>
      `
        });

        containerProducts.innerHTML = productsHolder;

    };

    function displayMoreProducts () {
        let newOffset = offset + limit;
        productGallery(newOffset, newOffset + limit);
        if( productsApi.length <= newOffset + limit){
            btn.disabled=true;
        }
    }

    btn.onclick=()=>{
        displayMoreProducts()
    }

    productGallery(offset, offset+ limit);

}
