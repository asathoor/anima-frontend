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
    $j('#reply-title').prepend('<i class="fas fa-comment"></i> ');


}); // ends jQuery document-ready-function (don't delete this line!)
