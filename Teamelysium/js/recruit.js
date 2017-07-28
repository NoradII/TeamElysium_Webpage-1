$(document).ready(function(){

   var scroll_start = 0;
   var startchange = $('#fh5co-main');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) { // Scroll is down.
          $('#navbar').css('background-color', '#00d2a5');
          $('#contact').css('color', '#fff');
          $('.navbar-toggle').css('background-color', '#f3f1f1');
          $('.navbar-toggle').css('color', '#00d2a5');
       } else {
          $('#navbar').css('background-color', '#fff');
          $('#contact').css('color', '#00d2a5');
          $('.navbar-toggle').css('background-color', '#00d2a5');
          $('.navbar-toggle').css('color', '#fff');
       }
   });

   $('[data-toggle="tooltip"]').tooltip();
   
});

