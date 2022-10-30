import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertService from './convert.js';

// business logic

function exchange(targetCurr, amountUSD) {
  ConvertService.exchange(targetCurr, amountUSD).then(function (response) {
    if (response.conversion_rate) {
      printElements(response, targetCurr, amountUSD);
    } else {
      printError(response, targetCurr);
    }
  });
}

// UI logic
