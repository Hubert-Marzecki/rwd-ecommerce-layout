import './styles/style.scss'
import script from './script'

new Glider(document.querySelector('.glider'), {
    slidesToShow: 6.5,
    slidesToScroll: 5,
    draggable: true,
    duration: 0.25,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});
var currentYear = (new Date).getFullYear();
$(".current-year").text( currentYear );



$(document).ready(function() {

    $(document).scroll(function() {
        var documentHeight = $(window).height();
        var documentWidth = $(window).width();
        var halfOfDocumentHeight = documentHeight / 2;
        var y = $(this).scrollTop();
        if (y > documentHeight && documentWidth >= 851) {
            $('.eclypse').addClass("arrow-visible")
        } else {
            $('.eclypse').removeClass("arrow-visible");
        }
    }
    )
});
$(".eclypse").click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const classNameGalleryProductItem = "col-sm-3 col-6 galery-product-item"
const classProductImage = "product-image"
const productImage = "https://via.placeholder.com/309x390"
const classProductInfo = "list-unstyled text-left  item-info"
const classGalleryProductBadge = "galery-product-badge"
const ProductBadge = "./assets/kz-bolt-line.png"
const classGalleryProductName = "galery-product-name"
const classGalleryProductPrice = "galery-product-price"
const classGalleryProductCart = "galery-product-cart"
const classCart = "hearth float-right mr-1"
const Cart = "./assets/kz-heart.png"


// <div class="col-sm-3 col-6 galery-product-item">
//     <img class="product-image" src="https://via.placeholder.com/309x390" alt="Card image cap">
//     <ul class="list-unstyled text-left  item-info">
//     <li class="galery-product-badge">
//     <img src="./assets/kz-bolt-line.png" alt=""> NEW
//     </li>
//     <li class="galery-product-name ">
//     Seersucker underwire
// </li>
// <li class="galery-product-price">
//     $220.00
// </li>
// <li class="galery-product-cart">
//     ADD TO CART
// <img class="hearth float-right mr-1" src="./assets/kz-heart.png" alt="">
//     </li>
//     </ul>
//     </div>

// $(document).scroll(function () {
//     //stick nav to top of page
//     var y = $(this).scrollTop();
//     var navWrap = $('#navWrap').offset().top;
//     if (y > navWrap) {
//         $('nav').addClass('sticky');
//     } else {
//         $('nav').removeClass('sticky');
//     }
// });



script()
