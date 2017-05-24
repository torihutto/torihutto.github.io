"use strict";
var $container = $('#isotope-container');
var filterSelected = '.item';

var $container = $('#isotope-container').imagesLoaded( function() {
    "use strict";
    $container.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        filter: filterSelected
    });
    $container.fadeIn();

    $container.isotope({
        filter: filterSelected
    });

});

$(document).ready(function() {

    "use strict";

    $(' #da-thumbs > li ').each( function() { 
        $(this).hoverdir(); 
    });

    $(".filterbutton").click(function(){
        filterSelected = $(this).data('filter');
        console.log('filterSelected: ' + filterSelected);
        filterSelected = "." + filterSelected
        $container.isotope({
            filter: filterSelected
        });
    });

    $('#target1').click(function(e){
        e.preventDefault();
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // also in css!
        }
    });

});

//------- SITE LOADER ---//

jQuery(window).load(function() { 
    "use strict";
    jQuery("#loaderInner").fadeOut(); 
    jQuery("#loader").delay(400).fadeOut("slow"); 

});


//------- ACTIVE LINKS SCROLLSPY ---//

//$('body').scrollspy({ offset: 200, target: '.navigation' });//

