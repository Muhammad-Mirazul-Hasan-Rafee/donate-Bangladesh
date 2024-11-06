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


// general function to show and hide section
function showSectionById(id){
    
    // hide the sections
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the sections
    document.getElementById(id).classList.remove('hidden');
    

};



