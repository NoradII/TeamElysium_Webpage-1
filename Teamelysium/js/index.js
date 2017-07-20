$(document).ready(function(){

   var scroll_start = 0;
   var startchange = $('#fh5co-hero');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) { // 스크롤 내려갔을 때
          $('#navbar').css('background-color', '#00d2a5');
          $('#home').css('color', '#fff');
          $('.navbar-toggle').css('border', '1px solid black');
          $('.navbar-toggle').css('color', '#fff');
       } else {
          $('#navbar').css('background-color', '#ffffff');
          $('#home').css('color', '#00d2a5');
          $('.navbar-toggle').css('background-color', '#00d2a5');
          $('.navbar-toggle').css('border', 'none');
       }
   });
});