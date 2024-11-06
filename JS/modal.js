// show modal

function showModal(){
   const showModalCard = document.getElementById('modal');
   showModalCard.classList.remove('hidden');

   // event listener to destroy modal within same function
document.getElementById('btn-modal-close').addEventListener('click' , destroyModal , {once : true });

};

// destroy model

function destroyModal(){
    document.getElementById('modal').classList.add('hidden');
};