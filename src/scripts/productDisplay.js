import heart from "../assets/kz-heart.png"
import bestSeller from "../assets/kz-number-one.png"
import getProducts from './ApiClient'
import glider from "./glider";
export default function allProducts () {

    const containerProducts = document.querySelector('.items-grid');
    const gliderProducts = document.querySelector('.glider')
    const gridGalleryContainer = document.querySelector(".product__grid__container")
    const btn = document.querySelector(".call-to-action");
    let responseData = {}

    let LIMIT = 8;
    let offset = 0;
    let LIMIT_GLIDER = 6;
    let offsetGlider = 0;

    async function loadData() {
        return responseData = await getProducts();
    }
    function gliderGallery(offset, LIMIT_GLIDER) {
        let gliderHolder = gliderProducts.innerHTML;
        let visibleItems = responseData.products.slice(offsetGlider, offsetGlider + LIMIT_GLIDER)
        visibleItems.forEach(item => {
            gliderHolder += `
              <div class="product col-sm-3 col-12 ">
                <img class="product-image" src=https://${item.imageUrl} alt="Card image cap">
                <div class="product-info">
                  <div class="product-name ">${item.brandName}</div>
                  <div class="product-price ">${item.price.current.text} </div>
                </div>
             </div>
`
        })
        gliderProducts.innerHTML = gliderHolder;
    }



    function productGallery(offset,LIMIT) {
        if(responseData) {
            let productsHolder =  containerProducts.innerHTML;
            let visibleItems = responseData.products.slice(offset,offset + LIMIT);

            visibleItems.forEach(item => {
                productsHolder += `
        <div class="col-sm-3 col-6  gallery-product-item">
          <img class="product-image" src=https://${item.imageUrl} alt="product img">
          <ul class="list-unstyled text-left  item-info">
        <li class="gallery-product-badge">
          ${item.isSellingFast ? {bestSeller} + "BESTSELLER" : ""}
          </li>
        <li class="gallery-product-name ">
        ${item.brandName}
        </li>
        <li class="gallery-product-price">
        ${item.hasMultiplePrices ? item.price.current.text : item.price.current.text}
        </li>
        <li class="gallery-product-cart">
          ADD TO CART
           <img class="hearth float-right mr-1" src=${heart} alt="heart">
        </li>
        </ul>
        </div>
      `
            });

            containerProducts.innerHTML = productsHolder;
        }


    };
    function displayMoreProducts () {
        let newOffset = offset + LIMIT;
        productGallery(newOffset, newOffset + LIMIT);
        if( responseData.products.length >= newOffset + LIMIT){
            btn.disabled=true;
            btn.style.opacity="0.2"
        }
    }
    btn.onclick=()=>{
        displayMoreProducts()
    }

    function gridGallery() {
        let gridHolder = gridGalleryContainer.innerHTML;
        let visibleItems = responseData.products;
        console.log(visibleItems[0].imageUrl)

      gridHolder += `
               <div class="product__grid__card product__grid__card--big"
           style="background-image: url(https://${visibleItems[14].imageUrl} )"
      >
        <div class="product__grid__content">
          <p class="product__grid__name">Sleeve denim<br>mini dress</p>
          <a class="product__grid__link" href="#">Shop now</a>
        </div>
      </div>
      <div class="product__grid__card product__grid__card--small"
        style="background-image: url(https://${visibleItems[7].imageUrl} )"
      >
        <div class="product__grid__content">
          <p class="product__grid__name">Back to school!</p>
          <a class="product__grid__link" href="#">Shop now</a>
        </div>
      </div>
      <div class="product__grid__card product__grid__card--small--second"
           style="background-image: url(https://${visibleItems[10].imageUrl} ) "
      >
        <div class="product__grid__content">
          <p class="product__grid__name"> Jewelry for night</p>
          <a class="product__grid__link" href="#">Shop now</a>
        </div>
      </div>
      <div class="product__grid__card product__grid__card--long"
     style="background-image: url(https://${visibleItems[3].imageUrl} )"
      >
        <div class="product__grid__content">
          <p class="product__grid__name">Sunglasses for you</p>
          <a class="product__grid__link" href="#">Shop now</a>
        </div>
      </div>
       `
    gridGalleryContainer.innerHTML = gridHolder;
}


    function clearPlaceholders() {
        let gliderHolder = gliderProducts.innerHTML;
        gliderHolder = ''
        gliderProducts.innerHTML = gliderHolder;
        let productsHolder =  containerProducts.innerHTML;
        productsHolder = ``
        containerProducts.innerHTML = productsHolder;
        let gridHolder = gridGalleryContainer.innerHTML;
        gridHolder = ``
        gridGalleryContainer.innerHTML = gridHolder;
    }



    async function displayData () {
    await loadData()
        clearPlaceholders()
    gliderGallery(offsetGlider, offsetGlider + LIMIT_GLIDER)
    glider();
    productGallery(offset, offset + LIMIT);
    gridGallery()
}
    displayData()


}
