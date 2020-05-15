export default function glider() {
    var glider = new Glider(document.querySelector('.glider'), {
        slidesToShow: 6.5,
        slidesToScroll: 5,
        draggable: true,
        duration: 0.25,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
    glider.refresh(true);
 }
