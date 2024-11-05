// Color change of Donation and History buttons
const donateButton = document.getElementById('btn-donation');
const historyButton = document.getElementById('btn-history');

//  general function for color changing
function changeColor(id){

    if(id.target === donateButton){
        donateButton.classList.add('bg-[#B4F461]');
        historyButton.classList.remove('bg-[#B4F461]');
    }

    else if(id.target === historyButton){

        historyButton.classList.add('bg-[#B4F461]');
        donateButton.classList.remove('bg-[#B4F461]');


    }

};


donateButton.addEventListener('click' , changeColor);
historyButton.addEventListener('click' , changeColor);





// show sections

document.getElementById('btn-donation').addEventListener('click' , function(event){

    showSectionById('main-section');

});

document.getElementById('btn-history').addEventListener('click' , function(event){

    document.getElementById('history-section').classList.remove('hidden');


    showSectionById('history-section');
});