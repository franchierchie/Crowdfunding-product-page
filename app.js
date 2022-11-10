const product = document.querySelectorAll('.product-container');
const productBtn = document.querySelectorAll('.btn-product');

const selectionModal = document.querySelector('.selection-modal');
const selectionInput = document.querySelectorAll('.selection-input');
const productModal = document.querySelectorAll('.modal-container');
const productSelectedMenu = document.querySelectorAll('.modal-selected-menu');
const modalBtn = document.querySelectorAll('.modal-btn');
const selectionInputPledge = document.querySelectorAll('.selection-input-pledge');

const successModal = document.querySelector('.success-modal');
const successBtn = document.querySelector('.success-btn');

for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', () => {
        if (!product[i].classList.contains('disabled')) {
            selectionModal.classList.remove('hidden');
        }
    });
}

for (let i = 0; i < selectionInput.length; i++) {
    selectionInput[i].addEventListener('click', () => {
        if (!productModal[i].classList.contains('disabled')) {
            productSelectedMenu.forEach(selected => {
                selected.classList.add('hidden');
            });
            productSelectedMenu[i].classList.remove('hidden');
        }
    });
    modalBtn[i].addEventListener('click', () => {
        if (selectionInputPledge[i].value >= selectionInputPledge[i].getAttributeNode('min').value) {
            console.log(`Pledge: ${selectionInputPledge[i].value}`);
            selectionModal.classList.add('hidden');
            successModal.classList.remove('hidden');
        }
    });
}

successBtn.addEventListener('click', () => {
    successModal.classList.add('hidden');
});