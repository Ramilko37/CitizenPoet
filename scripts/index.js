import { settings } from './constants.js';
import Api from './Api.js';
import FormValidator from './FormValidator.js';

const heroSection = document.querySelector('.content')
const infoSection = document.querySelector('.form-container-info');
const ministrySection = document.querySelector('.form-container-ministry');
const themeSection = document.querySelector('.form-container-theme');
const confirmSection = document.querySelector('.form-container-confirm');
const sendSection = document.querySelector('.form-send');
console.log(sendSection)
const claimSection = document.querySelector('.claim');

const sideBlock = document.querySelector('.side-block');
const applyButton = document.querySelector(".content__button");

const formInfoButtonBack = infoSection.querySelector("#form-info-back-button");
const formInfoButtonForward = infoSection.querySelector("#form-info-forward-button");


const formMinistryButtonBack = ministrySection.querySelector("#form-ministry-back-button");
const formMinistryButtonForward = ministrySection.querySelector("#form-ministry-forward-button");

const formThemeButtonBack = themeSection.querySelector("#form-theme-back-button");
const formThemeButtonForward = themeSection.querySelector("#form-theme-forward-button");

const formConfirmButtonBack = confirmSection.querySelector("#form-confirm-back-button");
const formConfirmButtonSubmit = confirmSection.querySelector("#form-confirm-submit-button");

const formSendButtonClose = sendSection.querySelector('#form-send-close-button');

//inputs userForm
const inputName = infoSection.querySelector('.form__input_type_first-name');
const inputLastName = infoSection.querySelector('.form__input_type_last-name');
const inputPhone = infoSection.querySelector('.form__input_type_phone');
const inputEmail = infoSection.querySelector('.form__input_type_email');
const inputAddress = infoSection.querySelector('.form__input_type_address');
const inputClaim = themeSection.querySelector('.form__textarea');


const ministriesList = document.querySelectorAll('.form-flex__item');
const template = document.querySelector('.template');

function setMinistryEventListeners() {
  ministriesList.forEach(ministry => {
    ministry.addEventListener('click', () => {
      ministry.classList.toggle('active-ministry')
    });
  });
};

setMinistryEventListeners()







applyButton.addEventListener('click', () => {
    sideBlock.classList.add('side-block_visible');
    infoSection.classList.add('form-container_visible');
})

formInfoButtonBack.addEventListener('click', () => {
    sideBlock.classList.remove('side-block_visible');
    infoSection.classList.remove('form-container_visible');
})

formInfoButtonForward.addEventListener('click', () => {
  infoSection.classList.remove('form-container_visible');
  ministrySection.classList.add('form-container_visible');
  userDataGetInfo();
  console.log(userData);
})

formMinistryButtonBack.addEventListener('click', () => {
  ministrySection.classList.remove('form-container_visible');
  infoSection.classList.add('form-container_visible');
})

formMinistryButtonForward.addEventListener('click', () => {
  ministrySection.classList.remove('form-container_visible');
  themeSection.classList.add('form-container_visible');
  // getActiveMinistry();
  const array = getActiveMinistry();
  console.log(array);
  userData.ministries = array.map((item) => {
    return  (' ' + item + ' ');
  });


  // userData.ministries[0].ministryName = array[0];
  // userData.ministries[1].ministryName = array[1];
  // userData.ministries[2].ministryName = array[2];
  // userData.ministries[3].ministryName = array[3];
  console.log(userData.ministries)
})

formThemeButtonBack.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  ministrySection.classList.add('form-container_visible');
})

formThemeButtonForward.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  confirmSection.classList.add('form-container_visible');
  claimSection.classList.add('form-container_visible');
  userClaimGetInfo();
})

formThemeButtonForward.addEventListener('click', () => {
  console.log(userData.ministries)
  userData.ministries.forEach((key) => {
   getPoem(key);
   
  })
})

formConfirmButtonBack.addEventListener('click', () => {
  themeSection.classList.add('form-container_visible');
  confirmSection.classList.remove('form-container_visible');
})

formConfirmButtonSubmit.addEventListener('click', (evt) => {
  evt.preventDefault();
  confirmSection.classList.remove('form-container_visible');
  sendSection.classList.add('form-container_visible');
  heroSection.classList.add('hidden');
  sideBlock.classList.remove('side-block_visible');
})

formSendButtonClose.addEventListener('click', () => {
  heroSection.classList.remove('hidden');
  sendSection.classList.remove('form-container_visible');
})





// const templateHTML = ''

const userData = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  claim: '',
  ministries: [
        
      ],
}

function userDataGetInfo() {

  userData.name = inputName.value;
  userData.lastName = inputLastName.value;
  userData.phone = inputPhone.value;
  userData.email = inputEmail.value;
  userData.address = inputAddress.value;
  // userData.claim = inputClaim.value;

  return console.log(userData);
}

function userClaimGetInfo() {
  userData.claim = inputClaim.value;
  return console.log(userData);
}

function getActiveMinistry() {
  const activeMinistry = Array.from(document.querySelectorAll('.active-ministry'));
  const activeMinistryNames = activeMinistry.map((item) => {
    return item.querySelector('.form-flex__title').textContent.slice(13);
  })
  
return activeMinistryNames;
}

// const anyArray = getActiveMinistry();

// arr.forEach(item => {
//   updatePoem(item) 
// });

// function add () {
//   container.textcontet
// }




function getPoem(key) {
  console.log(key.length)
  fetch(`https://buymebuyme.xyz/?q=%0A${key}%0A`)
  .then(res => res.json()) 
  .then((data) => {const obj1 = data;
    let result = obj1.map(({ fields }) => fields.text);
  
  
    let poem = result.filter(item => item.length < 1000);
    let randomPoem = poem[Math.floor((Math.random() * poem.length))];
    // console.log(randomPoem);

   claimSection.insertAdjacentHTML ('beforeend', `<div class="claim__header">
   <p class="claim__paragraph claim__ministry">
     В Министерство Правды Российской Федерации.
   </p>
   <p class="claim__paragraph claim__sender">
     От: Лукьянов Евгений.
     Проживает по адресу: Москва, Тверская улица, дом 13.
   </p>
   <p class="claim__paragraph claim__phone">
     Телефон: +7 (954) 648-53-78
   </p>
 </div>
 <h3 class="claim__title">Заявление</h3>
 <p class="claim__text">
   ${randomPoem}
 </p>
 <div class="claim__footer">
   <span class="claim__date footer-span">Дата: 13.12.2025</span>
   <span class="claim__sign footer-span">В. Луговской, 1926</span>
 </div>`)


    // let randomPoem = result[Math.floor((Math.random() * result.length))];
    // console.log(randomPoem)
    // function add (poem) { container.textcontet = poem}
  })
}


// const result = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);
// let result = obj1.filter(item => item.fields.text);




// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//   // Возвращает элемент для new_array
// }[, thisArg])  



// applyButton.addEventListener('click', updatePoem)





const infoSectionValidation = new FormValidator(infoSection, settings);
infoSectionValidation.enableValidation();