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

function printElements(response, targetCurr, amountUSD) {
  document.getElementById("show-response").innerText = `Converted ${amountUSD} USD into ${response.conversion_result} ${targetCurr}`;
}

function printError(error, targetCurr) {
  document.getElementById("show-response").innerText = `Cannot access ${targetCurr} ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let amount = parseInt(document.getElementById("amount").value);
  let targetCurrency = document.getElementById("currency-options").value;
  exchange(targetCurrency, amount);
}

window.addEventListener("load", function () {
  document.getElementById("userInput").addEventListener("submit", handleFormSubmission);
});