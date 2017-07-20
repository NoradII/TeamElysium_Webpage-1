$(document).ready(function(){

   var scroll_start = 0;
   var startchange = $('#fh5co-hero');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) { // 스크롤 내려갔을 때
          $('#navbar').css('background-color', '#00d2a5');
          $('#products').css('color', '#fff');
          $('.navbar-toggle').css('background-color', '#f3f1f1');
          $('.navbar-toggle').css('color', '#00d2a5');
       } else {
          $('#navbar').css('background-color', '#fff');
          $('#products').css('color', '#00d2a5');
          $('.navbar-toggle').css('background-color', '#00d2a5');
          $('.navbar-toggle').css('color', '#fff');
       }
   });
});
