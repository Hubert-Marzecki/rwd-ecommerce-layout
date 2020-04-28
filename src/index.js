import './styles/style.scss';
import scroll from './scripts/scroll'
import glider from './scripts/glider'
import currentYear from './scripts/currentYear'
import allProducts from './scripts/productDisplay'
import products from './scripts/products'

window.addEventListener('DOMContentLoaded', (event) => {
    scroll();
    glider();
    currentYear();
    allProducts();
    products();

});





