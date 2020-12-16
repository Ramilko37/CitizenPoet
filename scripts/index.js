const infoSection = document.querySelector('.form-container-info');
const ministrySection = document.querySelector('.form-container-ministry');
const themeSection = document.querySelector('.form-container-theme');
const confirmSection = document.querySelector('.form-container-confirm');

const sideBlock = document.querySelector('.side-block');
const applyButton = document.querySelector(".content__button");

const formInfoButtonBack = infoSection.querySelector("#form-info-back-button");
const formInfoButtonForvard = infoSection.querySelector("#form-info-forvard-button");


const formMinistryButtonBack = ministrySection.querySelector("#form-ministry-back-button");
const formMinistryButtonForvard = ministrySection.querySelector("#form-ministry-forvard-button");

const formThemeButtonBack = themeSection.querySelector("#form-theme-back-button");
const formThemeButtonForvard = themeSection.querySelector("#form-theme-forvard-button");

const formConfirmButtonBack = confirmSection.querySelector("#form-confirm-back-button");
const formConfirmButtonForvard = confirmSection.querySelector("#form-confirm-forvard-button");

applyButton.addEventListener('click', () => {
    sideBlock.classList.add('side-block_visible');
    infoSection.classList.add('form-container_visible');
})

formInfoButtonBack.addEventListener('click', () => {
    sideBlock.classList.remove('side-block_visible');
    infoSection.classList.remove('form-container_visible');
})

formInfoButtonForvard.addEventListener('click', () => {
  infoSection.classList.remove('form-container_visible');
  ministrySection.classList.add('form-container_visible');
})

formMinistryButtonBack.addEventListener('click', () => {
  ministrySection.classList.remove('form-container_visible');
  infoSection.classList.add('form-container_visible');
})

formMinistryButtonForvard.addEventListener('click', () => {
  ministrySection.classList.remove('form-container_visible');
  themeSection.classList.add('form-container_visible');
})

formThemeButtonBack.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  ministrySection.classList.add('form-container_visible');
})

formThemeButtonForvard.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  confirmSection.classList.add('form-container_visible');
})

formConfirmButtonBack.addEventListener('click', () => {
  themeSection.classList.add('form-container_visible');
  confirmSection.classList.remove('form-container_visible');
})
