export default function currentYear() {

        var currentYear = (new Date).getFullYear();
        $(".current-year").text( currentYear );

}


