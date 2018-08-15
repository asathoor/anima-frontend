/**
 * file: myScript.js
 * purpose: add your JavaScript here
 *
 * On WP run jQuery in a "no-conflict" way.
 * note: in this case use $j() as $() in normal jQuery.
 **/
var $j = jQuery.noConflict(); // jQuery in protected mode

$j(function(){

    console.log('Cheers from jQuery!'); // test

    // Font Awesome Icons

    // home icon on the responsive menu
    $j('.menu-toggle').prepend('<i class="fas fa-home"></i> ');

    // comment
    $j('#reply-title').prepend('<i class="fas fa-comments"></i> ');

    // edit
    $j('.post-edit-link').prepend('<i class="fas fa-pen-square"></i> ');

    // next / previous post arrows
    $j('.nav-previous').prepend('<i class="fas fa-arrow-alt-circle-left"></i> '); // previous <
    $j('.nav-next').append(' <i class="fas fa-arrow-alt-circle-right"></i>'); // next >

}); // ends jQuery document-ready-function (don't delete this line!)
