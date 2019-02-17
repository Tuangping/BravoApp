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
    var dataParameter = {
      amount_money: {
        amount:        "100", //2 digit decimal 100 = $1. Square App minimum payment is $1.
        currency_code: "USD"
      },

      // Replace this value with your application's callback URL
      callback_url: "https://tuangping.github.io/bravoapp",

      // Replace this value with your application's ID
      client_id: "sq0idp-FlAazmCX59x2_GX2DstntA",

      version: "1.3",
      notes: "You are a great customer. BRAVO!!",//notes for the transaction
      options: {
        supported_tender_types: ["CREDIT_CARD","CASH","OTHER","SQUARE_GIFT_CARD","CARD_ON_FILE"]
      }
    };
//    window.location =
      location.href=
      "square-commerce-v1://payment/create?data=" +
      encodeURIComponent(JSON.stringify(dataParameter));
  });
});
