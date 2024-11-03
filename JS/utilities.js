// general function to take the amount of money from input field
function getInputFieldValueOfDonation(id){

    const inputValue = document.getElementById(id).value;
    const inputMoney = parseFloat(inputValue);
    return inputMoney;

};


//  general function to take every text field amount of moeny
function getTextFieldValue(id){

    const textValue = document.getElementById(id).innerText;
    const textAmount = parseFloat(textValue);
    return textAmount;
};