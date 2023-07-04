$(document).ready(function(){
    //Event Click
    $('#click').click(function(){
        alert("The button have been click");
      });

    //Event Double Click
    $('#dblclick').dblclick(function(){
      $(this).css('background-color','cyan')
    })

    //Event Mouse Leave
    $('.mouse').mouseleave(function(){
      $(this).css('background-color','gray')
    })

    //Event Mouse Enter
    $('.mouseenter').mouseenter(function(){
      $(this).css('background-color','cyan')
    });

    //Event Keyadown
    $('#keydown').keydown(function(){
      $('#pesan_keydown').text($(this).val())
    })
    
    //Event Keyup
    $('#keyup').keyup(function(){
      $('#pesan_keyup').text($(this).val())
    })

  });