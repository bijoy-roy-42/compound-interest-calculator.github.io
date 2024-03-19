const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', calculateCompoundInterest);

function calculateCompoundInterest() {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value) / 100; // Convert rate to decimal
    const time = parseFloat(timeInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        resultDiv.textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const amount = principal * Math.pow((1 + rate), time);
    const interest = amount - principal;

    resultDiv.textContent = `Compound Interest: $${interest.toFixed(2)}`;
}