// first donation part
document.getElementById('btn-donate-now1').addEventListener('click', function (event) {

    event.preventDefault();


    const currentBalance1 = getTextFieldValue('donation-amount-balance1');
    const addMoney1 = getInputFieldValueOfDonation('donation-amount1');


    if (addMoney1 < 0 || isNaN(addMoney1)) {
        alert('Please input valid digit!');
        return;
    }
    else {
        const newDonation1 = addMoney1 + currentBalance1;
        document.getElementById('donation-amount-balance1').innerText = newDonation1;
        mainBalance(addMoney1);
        historyOfDonation(addMoney1);
        showModal();
    }
});

// second donation part
document.getElementById('btn-donate-now2').addEventListener('click', function (event) {

    event.preventDefault();

    const currentBalance2 = getTextFieldValue('donation-amount-balance2');
    const addMoney2 = getInputFieldValueOfDonation('donation-amount2');

    if (addMoney2 < 0 || isNaN(addMoney2)) {
        alert('Please input valid digit!');
        return;
    }

    else {

        const newDonation2 = addMoney2 + currentBalance2;
        document.getElementById('donation-amount-balance2').innerText = newDonation2;
        mainBalance(addMoney2);
        historyOfDonation(addMoney2);
        showModal();
    }
});

// third donation part


document.getElementById('btn-donate-now3').addEventListener('click', function (event) {

    event.preventDefault();

    const currentBalance3 = getTextFieldValue('donation-amount-balance3');
    const addMoney3 = getInputFieldValueOfDonation('donation-amount3');

    if (addMoney3 < 0 || isNaN(addMoney3)) {
        alert('Please input valid digit!');
        return;
    }
    else {
        const newDonation3 = addMoney3 + currentBalance3;
        document.getElementById('donation-amount-balance3').innerText = newDonation3;
        mainBalance(addMoney3);
        historyOfDonation(addMoney3);
        showModal();
    }
});

// Main Balance Reducing

function mainBalance(donatedAmount) {

    let currentAccountBalance = getTextFieldValue('account-balance');
    let newAccountBalance = currentAccountBalance - donatedAmount;
    document.getElementById('account-balance').innerText = newAccountBalance;

};

// Donation History

function historyOfDonation(donateAmount) {
    const div = document.createElement('div');

    const donateDate = new Date();

    div.innerHTML = ` 

    <h4 class="font-bold text-[#111111]"> Total: ${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>

    <p>Date : ${donateDate} </p>`;

   
    document.getElementById('history-container').appendChild(div);

};