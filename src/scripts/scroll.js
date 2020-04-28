export default function scroll () {
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
}

