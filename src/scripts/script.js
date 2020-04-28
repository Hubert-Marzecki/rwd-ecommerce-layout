import heartBadge from './assets/kz-heart.png'
import boltBadge from './assets/kz-bolt-line.png'


export default function() {

    const showMoreBtn = document.getElementById('show-more-btn');


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
        $(".eclypse").click(function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });


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


       const product = function createElement(n) {

                $("div.items-grid").append("<div class='col-sm-3 col-6 galery-product-item'> <div>")
                // .html(($('<img src= "https://via.placeholder.com/309x390", class="product-image"}/>')))
                // $("galery-product-item").html(myImg);
                $('div.galery-product-item').html($('<img src= "https://via.placeholder.com/309x390" class="product-image"/>'));
                $('div.galery-product-item').append($('<ul class="list-unstyled text-left  item-info"> </ul>'));
                $('ul.item-info').append($('<li class="galery-product-badge">NEW</li>'));
                $('li.galery-product-badge').append($('<img src="./assets/kz-bolt-line.png" class="galery-product-badge" />'));
                $('ul.item-info').append($('<li class="galery-product-name"> Seersucker underwire </li>'));
                $('ul.item-info').append($('<li class="galery-product-price"> $220.00 </li>'));
                $('ul.item-info').append($('<li class="galery-product-cart"> ADD TO CART </li>'));
                $('li.galery-product-cart').append($('<img src="./assets/kz-heart.png" class="hearth float-right mr-1" />'));
            }

    });

}
