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
    showSectionById('history-section');
});


// redirect
let blog = true;
const clickBlog = document.getElementById('btn-blog');

function redirectPage(){
    if(blog){
        window.location.href = 'blog.html';
        clickBlog.textContent = 'Home';
    }
    else{
        window.location.href = 'index.html';
        clickBlog.textContent = 'Blog';
    }
    blog =!blog;


    clickBlog.addEventListener('click' , redirectPage);

};