$(document).ready(function() {

    $('.carousel').carousel({
        interval: 5000
    })

    $(window).scroll(function() {

        var bottom_of_window = $(window).scrollTop() + $(window).height();

        // Check the location of each element hidden */
        $('#about .content .hidden').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();

            /* If the object is completely visible in the window, fadeIn it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1',
                    'margin-left': '0'
                }, 600);
            }
        });
    });

    /* Profile */
    /*
    $(document).ready(function() {
        $(".section-info").not(":first").hide();
        $("ul#menu li:first").addClass("active").show(); 
     
        $("ul#menu li").click(function() {
            $("ul#menu li.active").removeClass("active");
            $(this).addClass("active");
            $(".section-info").slideUp();       
            $($('a',this).attr("href")).slideDown('slow');
     
            return false;
        });
     
    });
    */

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(function() {
        $('[data-toggle="popover"]').popover()
    })
});
