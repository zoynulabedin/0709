;(function ($) {
  'use strict';

    
      $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          
           if (scroll >= 50) {
      //clearHeader, not clearheader - caps H
       $(".header-section").addClass("sticky");
       
       
  }else if(scroll ==0){
      $(".header-section").removeClass("sticky");
      
      
      
  }
     
        });
        
      
  
   
              
     

})(jQuery);
