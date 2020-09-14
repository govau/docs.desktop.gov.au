$( document ).ready( function() {
    $('table:not(.table)').addClass('table table-bordered');

    if ( $('#toc-container > ul > li').length > 0 ) {
        $('#back-to-top a').on( 'click', function() {
            $('html, body').animate({
                    scrollTop: 0
            }, 'fast');
        });
        $(window).scroll(function() {
            if ( window.scrollY > $(window).height() ) {
                    $('#back-to-top').addClass('visible');
            }
            else {
                    $('#back-to-top').removeClass('visible');
            }
        });
    }

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
        console.log($spy);
      });
});