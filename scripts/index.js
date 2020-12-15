const applyButton = document.querySelector(".content__button");
const formButtonBack = document.querySelector("#form-info-back-button");
const sideBlock = document.querySelector('.side-block');
const infoSection = document.querySelector('.form-container-info');

applyButton.addEventListener('click', () => {
    sideBlock.classList.add('side-block_visible');
    infoSection.classList.add('form-container_visible');
})

formButtonBack.addEventListener('click', () => {
    sideBlock.classList.remove('side-block_visible');
    infoSection.classList.remove('form-container_visible');
})