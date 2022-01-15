import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
// import '../src/money-changer'
import Exchange from '../src/money-changer';

// function displayResult(response) {
//   const amount = $('#amount').val();
//   console.log(response);
//   if (response.conversion_rate) {
//     const rate = response.conversion_rate;
//     $('#result').html = $(`<p>The converted amount is: ${(rate * amount)}</p>`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

$(document).ready(function() {
  $('#convert').click(function() {
    event.preventDefault();
    const currency = $('#currency').val();
    const amount = $('#amount').val();
    console.log(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`);
    if($('#amount').val()>0) {
      Exchange.getRate(currency)  
        .then(function(response) {
          if (response.conversion_rate) {
            const rate = response.conversion_rate;
            const showResult = "The converted amount is: " + (rate * amount);
            console.log(showResult);
            $('#result').text = showResult;
          } else {
            $('#showErrors').text(`There was an error: ${response.message}`);
          }          
        });
    }
  });
});
