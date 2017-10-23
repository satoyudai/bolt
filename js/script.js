jQuery(function($){
      $('.humburgar').click(function(){
         if ($('#button').css('display') == 'none') {
          $('#button').slideDown('fast');
        } else {
           $('#button').slideUp('fast');
         }
      });
        });
