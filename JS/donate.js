// first donation part
document.getElementById('btn-donate-now1').addEventListener('click' , function(event){

    event.preventDefault();
    
    
    const currentBalance = getTextFieldValue('donation-amount-balance1');
    const addMoney = getInputFieldValueOfDonation('donation-amount1');
    const newDonation = addMoney + currentBalance;
    document.getElementById('donation-amount-balance1').innerText = newDonation;

});

// second donation part
document.getElementById('btn-donate-now2').addEventListener('click' , function(event){

    event.preventDefault();

    const currentBalance = getTextFieldValue('donation-amount-balance2');
    const addMoney = getInputFieldValueOfDonation('donation-amount2');
    const newDonation = addMoney + currentBalance;
    document.getElementById('donation-amount-balance2').innerText = newDonation;
});

// third donation part
document.getElementById('btn-donate-now3').addEventListener('click' , function(event){

    event.preventDefault();

    const currentBalance = getTextFieldValue('donation-amount-balance3');
    const addMoney = getInputFieldValueOfDonation('donation-amount3');
    const newDonation = addMoney + currentBalance;
    document.getElementById('donation-amount-balance3').innerText = newDonation;

}); 
