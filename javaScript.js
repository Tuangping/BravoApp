var rideCost = 120;
var rideCost_ui = "$1.20";
// var now = new Date();
var endSecond = 15;// 60=1min
// var timeup = now.setSeconds(now.getSeconds() + endSecond);
// console.log("timeup: "+ timeup);
// console.log("getTime: "+now.getTime());
//var timeup = now.setHours(now.getHours() + 1);
var holdTimeout;
$(document).ready(function(){

  var page = 0,
      pageContainers = $('.page-container');

  $('.round-button.butt-r1').click(function(e){
    e.preventDefault();
    page = 1;
    rideCost= 139;
    rideCost_ui = "$1.39";
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
    console.log(rideCost);
    console.log(page);

  });
  $('.round-button.butt-r2').click(function(e){
    e.preventDefault();
    page = 2;
    rideCost= 250;
    rideCost_ui = "$2.50";
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
    console.log(rideCost);
    console.log(page);
  });
  $('.round-button.butt-r3').click(function(e){
    e.preventDefault();
    page = 3;
    rideCost= 302;
    rideCost_ui = "$3.02"
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
    console.log(rideCost);
    console.log(page);
  });
  $('.btn-exit').click(function(e){
    e.preventDefault();
    page = 0;
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
  });
  $('.btn-restart').click(function(e){
    e.preventDefault();
    // document.getElementById( 'myframe' ).setAttribute( 'src', '' );
  //  $('iframe').remove();
    page = 0;
    pageContainers.removeClass('active');
    $('.page-container#page'+page).addClass('active');
  });
  $('.btn-confirm').click(function(e){
      e.preventDefault();
      // counter = setInterval(timer.bind(this), 1000);
      // console.log(now.setSeconds+ " / "+ timeup);
      // console.log("timeup: "+ timeup);
      // console.log("getTime: "+now.getTime());
      holdTimeout=counter('#timer', endSecond );
      page = 4;
      pageContainers.removeClass('active');
      $('.page-container#page'+page).addClass('active');
  });
  $('.btn-end').click(function(e){
      e.preventDefault();
      // clearInterval(counter);
      clearTimeout(holdTimeout);
      // timeup = now.setSeconds(now.getSeconds() + endSecond);
      page = 5;
      pageContainers.removeClass('active');
      $('.page-container#page'+page).addClass('active');
      document.getElementById('rideCost').innerHTML = rideCost_ui;
  });
  $('.btn-pay').click(function(e){
    e.preventDefault();
    //$('.page-container#page'+page).append('<iframe id="myframe" width="1000" height="500" style="z-index:100;" src="readytoPay.html"></iframe>');
    console.log("go to Square App");
    callSquare();
  });
});

function callSquare(){
  console.log("total: "+rideCost);
  var dataParameter = {
    amount_money: {
        amount:        "", //2 digit decimal 100 = $1. Square App minimum payment is $1.
        currency_code: "USD"
    },
    // Replace this value with your application's callback URL
    callback_url: "https://tuangping.github.io/bravoapp/readytoPay.html",

    // Replace this value with your application's ID
    client_id: "sq0idp-FlAazmCX59x2_GX2DstntA",

    version: "1.3",
    notes: "You are a great customer. BRAVO!!",//notes for the transaction
    options: {
      supported_tender_types: ["CREDIT_CARD","CASH","OTHER","SQUARE_GIFT_CARD","CARD_ON_FILE"]
    }
  };
  dataParameter.amount_money.amount = rideCost;
//    window.location =
    window.location =
    "square-commerce-v1://payment/create?data=" +
    encodeURIComponent(JSON.stringify(dataParameter));
    console.log("amount_money: "+ dataParameter.amount_money.amount);
}

function counter(selector, seconds){
        $(selector).html(timeDisplay(seconds));
        if(seconds>0){
            setTimeout(function(){
                counter(selector, seconds-1);
            }, 1000);
        }else{
          document.getElementById("timer").innerHTML = "now is at the end of the road";
          //       clearInterval(counter);
          clearTimeout(function(){
              counter(selector, seconds-1);
          }, 1000);
        }
    }
function timeDisplay(seconds){
        let secs = (seconds % 60);
        if(secs<10) secs = '0' + secs;
        return Math.floor(seconds / 60) + ':' + secs;
}

// function timer() {
//   now = new Date();
//   count = Math.round((timeup - now)/1000);
//   if (now > timeup) {
//       //window.location = "/logout"; //or somethin'
//       document.getElementById("timer").innerHTML = "now is at the end of the road";
//       clearInterval(counter);
//       return;
//   }
//   var seconds = Math.floor((count%60));
//   var minutes = Math.floor((count/60) % 60);
//   document.getElementById("timer").innerHTML = minutes + ":" + seconds;
// }
// console.log(now.setSeconds(now.getSeconds())+ " / "+ timeup);
//
// Function.prototype.bind = function(parent) {
//     var f = this;
//     var args = [];
//
//     for (var a = 1; a < arguments.length; a++) {
//         args[args.length] = arguments[a];
//     }
//
//     var temp = function() {
//         return f.apply(parent, args);
//     }
//
//     return(temp);
// }
