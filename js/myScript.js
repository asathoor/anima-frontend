/**
 * file: myScript.js
 * purpose: add your JavaScript here
 **/
console.log('Hello from js/myScript.js - Vanilla JavaScript'); // Vanilla JavaScript test

var $j = jQuery.noConflict(); // jQuery in protected mode

/**
 * Run jQuery in a "no-conflict" way
 * note: use $j() not $() in protected mode ;-)
 * document-ready-function
 **/
$j(function(){

    console.log('Cheers from jQuery too!'); // test

    // ... add your jQuery below ...
    $j('.menu-toggle').prepend('<i class="fas fa-home"></i> ');

    // comment
    $j('#reply-title').prepend('<i class="fas fa-comments"></i> ');

    // edit
    $j('.post-edit-link').prepend('<i class="fas fa-pen-square"></i> ');

    // next / previous post arrows
    $j('.nav-previous').prepend('<i class="fas fa-arrow-alt-circle-left"></i> '); // previous <
    $j('.nav-next').append(' <i class="fas fa-arrow-alt-circle-right"></i>'); // next >

}); // ends jQuery document-ready-function (don't delete this line!)
