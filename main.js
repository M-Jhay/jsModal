//Get modal element
var modal = document.querySelector('#simpleModal');

//Get open modal button
var modalBtn = document.querySelector('#modalBtn');

//Get close button
var closeBtn = document.querySelector('.closeBtn');

//listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);

//function to 0pen modal
function openModal() {
    modal.style.display = 'block';
}

//function to Close modal
function closeModal() {
    modal.style.display = 'none';
}

//function to close modal if outside click
function outsideClick (e){
    if (e.target == modal){
        modal.style.display ='none';
    }
}