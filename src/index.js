import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
import Exchange from '../src/money-changer';


$(document).ready(function() {
  $('#convert').click(function() {
    event.preventDefault();
    const currency = $('#currency').val();
    const amount = $('#amount').val();
    if($('#amount').val()>0) {
      Exchange.getRate(currency)  
        .then(function(response) {
          if (response.conversion_rate) {
            const rate = response.conversion_rate;
            const showResult = "The converted amount is: " + (rate * amount);
            console.log(showResult);
            $('#result').text = showResult;
            alert(showResult);
          } else {
            $('#showErrors').text(`There was an error: ${response.message}`);
          }          
        });
    }
  });
});
