import { settings } from './constants.js';
import Api from './Api.js';
import FormValidator from './FormValidator.js';

const ministryTruthButton = document.querySelector('#ministryTruth')
const ministryPeaceButton = document.querySelector('#ministryPeace')
const ministryPlentyButton = document.querySelector('#ministryPlenty')
const ministryLoveButton = document.querySelector('#ministryLove')

const ministriesList = document.querySelectorAll('.form-flex__item')

function setMinistryEventListeners() {
  ministriesList.forEach(ministry => {
    ministry.addEventListener('click', () => {
      ministry.classList.toggle('active-ministry')
    });
  });
};

setMinistryEventListeners()

function getActiveMinistry() {

const activeMinistry = document.querySelectorAll('.active-ministry');
const activeMinistryNames = activeMinistry.forEach((item) => {
  return console.log(item.querySelector('.form-flex__title').textContent);
})
}






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



console.log(inputName)


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
  // ministrySection.classList.remove('form-container_visible');
  // themeSection.classList.add('form-container_visible');
  getActiveMinistry()
})

formThemeButtonBack.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  ministrySection.classList.add('form-container_visible');
})

formThemeButtonForward.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  confirmSection.classList.add('form-container_visible');
  claimSection.classList.add('form-container_visible');
  userDataGetInfo();
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

// const pravda = 'правда';


// const api = new Api({
//   baseUrl: `http://www.buymebuyme.xyz?q=${pravda}`,
//   headers: {
//       'Content-Type': 'application/json'
//   }
// });

// console.log(api)

// const poems = api.getPoems();





// console.log('poems', poems)

// const poem = poems[0];

// console.log(poem)

// api.getPoems().then(data)=>{console.log(data)}

// const poemParagraph = document.querySelector('.content__paragraph');
// console.log(poemParagraph)








// const userData = {
//   name: '',
//   lastName: '',
//   phone: '',
//   email: '',
//   address: '',

//


// }

const userData = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  claim: '',
  ministries: [
        {
          ministry: '',
          container: "conttrue",
        },
        {
          ministry: "мир",
          container: "conttrue",
        },
        {
          ministry: "",
          container: "",
        },
        {
          ministry: "",
          container: "",
        },
      ],
}

function userDataGetInfo() {

  userData.name = inputName.value;
  userData.lastName = inputLastName.value;
  userData.phone = inputPhone.value;
  userData.email = inputEmail.value;
  userData.address = inputAddress.value;
  userData.claim = inputClaim.value;
  return console.log(userData);
}



// function getInputValues() {
//   const inputs = Array.from(infoSection.querySelectorAll('.form__input'));


//   const obj = {};



//   inputs.forEach((input) => {
//     console.log(input);
//       obj[input.name] = input.value;
//       // obj[input.lastName] = input.value
//       // obj[input.phone] = input.value
//       // obj[input.email] = input.value
//   })
//   return console.log(obj);


// }










// arr.forEach(item => {
//   updatePoem(item)
// });

// function add () {
//   container.textcontet
// }

function updatePoem(key)
  {fetch(`http://www.buymebuyme.xyz?q=${key}`)
  .then(res => res.json())
  .then((data) => {const obj1 = data;
    let result = obj1.map(({ fields }) => fields.text);
    console.log(result);
    let poems = result.filter(item => item.length < 800);
    console.log(poems)
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
