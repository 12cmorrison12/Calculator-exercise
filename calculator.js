window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const inputValues = { amount: 0, years: 0, rate: 0};

  const amountInput = document.getElementById("loan-amount");
  amountInput.value = inputValues.amount;
  const yearsInput = document.getElementById("loan-years");
  yearsInput.value = inputValues.years;
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = inputValues.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(inputValues) {
  const n = Math.floor(inputValues.years * 12);
  const rate = (inputValues.rate / 100) / 12;
  return ((inputValues.amount * rate) / (1 - Math.pow((1 + rate), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyAmount = document.getElementById("monthly-payment");
  monthlyAmount.innerText = monthly;
}
