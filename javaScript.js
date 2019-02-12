$(document).ready(function(){
  var page = 0,
      pageContainers = $('.page-container');

  $('.round-button.butt-r1').click(function(e){
    e.preventDefault();
    page = 1;
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
  });
  $('.round-button.butt-r2').click(function(e){
    e.preventDefault();
    page = 2;
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
  });
  $('.round-button.butt-r3').click(function(e){
    e.preventDefault();
    page = 3;
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
  });
  $('.btn-exit').click(function(e){
    e.preventDefault();
    page = 0;
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
  });
  $('.btn-confirm').click(function(e){
      e.preventDefault();
      page = 4;
      pageContainers.removeClass('active');
      $('.page-container#page'+page).addClass('active');
  });
  $('.btn-end').click(function(e){
      e.preventDefault();
      page = 5;
      pageContainers.removeClass('active');
      $('.page-container#page'+page).addClass('active');
  });
  $('.btn-pay').click(function(e){
    e.preventDefault();
    $('.page-container#page'+page).append('<iframe width="1000" height="500" style="z-index:100;" src="readytoPay.html"></iframe>');
  });
});
