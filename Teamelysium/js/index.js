$(document).ready(function(){

   var scroll_start = 0;
   var startchange = $('#fh5co-hero');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) { // 스크롤 내려갔을 때
          $('#navbar').css('background-color', '#4bdca3');

          //$('#fh5co-primary-menu').css('color', 'black'); 
       } else {
          $('#navbar').css('background-color', '#90d7ea');
          //$('#navbar').css('background-color', '#4bdca3');
       }


   });
});