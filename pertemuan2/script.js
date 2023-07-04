$(document).ready(function(){
    //selector tag
    $('h1').css('color','red');
    $('p').css('color','blue');

    //selector class
    $('.judul').css('background-color','green');
    $('.paragraf').css  ('color','salmon');

    //selector id
    $('#judul').css('border','2px solid');
    $('#paragraf').css('border','2px solid green');

    $('*').css('background-color','gray');

    //References : https://www.w3schools.com/jquery/jquery_ref_selectors.asp

    $('input:submit').css('background-color','green');
    $('input:button').css('background-color','cyan').css('padding','20px');
})

