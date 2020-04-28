import './styles/style.scss';
import scroll from './scripts/scroll'
import glider from './scripts/glider'
import currentYear from './scripts/currentYear'
import allProducts from './scripts/productDisplay'


window.addEventListener('DOMContentLoaded', (event) => {
    scroll();
    glider();
    currentYear();
    allProducts();

});





