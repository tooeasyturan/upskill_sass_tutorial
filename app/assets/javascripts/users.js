/* global $, Stripe */
//Document ready 
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var signupBtn = $('#form-signup-button');
  
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  //When user clicks form submiet btn
  signupBtn.click(function(event){
    // prevent default submission behaviour.
   event.preventDefault(); 
   
  //Collect credit card fields
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
    //Send card info to Stripe
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripe.ResponseHandler);
   
  });
  
  
 
  //Stripe will return a card token
  //Inject card token as hidden field into form
  //Submit form to our Rails app
});