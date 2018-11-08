$(document).ready(function() {
    ($('a[href="#sheldure"], .main_btn, .main_btna')).on("click", function() {
        $('.modal').slideDown(1000);
        $('.overlay').fadeIn(1500);
        $('.overlay').animate({
            opacity: 0.7
        }, 900);
      });

      $('.close').on('click', function(){
          $(".overlay").hide(1000);
          $('.modal').slideUp(1000);
      }); 
    });




   

    
    





