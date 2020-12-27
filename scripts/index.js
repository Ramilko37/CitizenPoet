enableValidation()

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


const heroSection = document.querySelector('.content')
const infoSection = document.querySelector('.form-container-info');
const ministrySection = document.querySelector('.form-container-ministry');
const themeSection = document.querySelector('.form-container-theme');
const confirmSection = document.querySelector('.form-container-confirm');
const sendSection = document.querySelector('.form-send');
// const claimSection = document.querySelector('.claim');
const claimSection = document.querySelector('.claim-container');



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
//inputs formConfirm
const confrmInputName = confirmSection.querySelector('#input-confirm-name');
const confrmInputLastName = confirmSection.querySelector('#input-confirm-last-name');
const confrmInputPhone = confirmSection.querySelector('#input-confirm-phone');
const confrmInputEmail = confirmSection.querySelector('#input-confirm-email');
const confrmInputAddress = confirmSection.querySelector('#input-confirm-address');
const confrmTextareaClaim = confirmSection.querySelector('#textarea-confirm-claim');
const navNextButton = confirmSection.querySelector('.next');
let forvardCounter = 1
const navPrevButton = confirmSection.querySelector('.prev');
let counter = 1

let innerClaimsList = []

navNextButton.addEventListener('click', () => {

  if (forvardCounter < innerClaimsList.length) {
    const currentClaim = claimSection.querySelector(`#claim${forvardCounter}`)
    const nextClaim = claimSection.querySelector(`#claim${forvardCounter + 1}`)

    console.log(forvardCounter)

    currentClaim.classList.remove('claim__show')
    nextClaim.classList.add('claim__show')
    forvardCounter++
  } else if (forvardCounter === innerClaimsList.length) {
    const currentClaim = claimSection.querySelector(`#claim${forvardCounter}`)
    const nextClaim = claimSection.querySelector(`#claim${forvardCounter-(innerClaimsList.length - 1)}`)

    console.log(forvardCounter)

    currentClaim.classList.remove('claim__show')
    nextClaim.classList.add('claim__show')
    forvardCounter = 1;
  }
}
)
if (counter === 1) {
  navPrevButton.disabled = true;
}
  // navPrevButton.addEventListener('click', (evt) => {

  //   if (counter < 4) {
  //     const currentClaim = claimSection.querySelector(`#claim${counter}`)
  //     const nextClaim = claimSection.querySelector(`#claim${counter + 1}`)

  //     console.log(counter)

  //     currentClaim.classList.remove('claim__show')
  //     nextClaim.classList.add('claim__show')
  //     counter++
  //   } else if (counter === 4) {
  //     const currentClaim = claimSection.querySelector(`#claim${counter}`)
  //     const nextClaim = claimSection.querySelector(`#claim${counter-3}`)

  //     console.log(counter)

  //     currentClaim.classList.remove('claim__show')
  //     nextClaim.classList.add('claim__show')
  //     counter = 1;
  //   }
  // }
  // )

// const currentClaim = claimSection.querySelector(`#claim${counter}`)
// const nextClaim = claimSection.querySelector(`#claim${counter + 1}`)

// console.log(counter)

// currentClaim.classList.remove('claim__show')
// nextClaim.classList.add('claim__show')




// })


// const claimsList = setTimeout(getClainsList, 2000)


const ministriesList = document.querySelectorAll('.form-flex__item');
const confMini = Array.from(document.querySelectorAll('.select-ministry__item'))


const template = document.querySelector('.template');

  function setConfirmValues() {
    confrmInputName.value = userData.name;
    confrmInputLastName.value = userData.lastName;
    confrmInputPhone.value = userData.phone;
    confrmInputEmail.value = userData.email;
    confrmInputAddress.value = userData.address;
    confrmTextareaClaim.value = userData.claim;
    // inputClaim.value = userData.claim;
  }


  function ministryClickHandler (evt) {
    evt.target.closest('.form-flex__item').classList.toggle('active-ministry')
    // evt.target.closest('.form-flex__item').id.classList.toggle('active-ministry')
    const confirmMinistry = confirmSection.querySelector(`#${evt.target.closest('.form-flex__item').id}`)
    confirmMinistry.classList.toggle('select-ministry__item_active')

  }

  function setMinistryEventListeners() {
    ministriesList.forEach(ministry => {
      ministry.addEventListener('click', ministryClickHandler)

    })

  }

  function unsetMinistryEventListeners() {
    ministriesList.forEach(ministry => {
      ministry.removeEventListener('click', ministryClickHandler)
    })
  }




function setConfirmMinistries() {
  const userMinistries = userData.ministries;
  console.log(userMinistries)
  const confirmMinistriesSelectors = Array.from(confirmSection.querySelectorAll('.select-ministry__item'))
  console.log(confirmMinistriesSelectors)



  // const confirmMinistries = confirmMinistriesSelectors.map(selector => {
  //   return ` ${selector.textContent} `;
  // })
  // console.log(userMinistries)

// console.log(confirmMinistriesSelectors)

// confirmMinistriesSelectors.forEach((item, index) => {
//   const itemTextList = confirmMinistriesSelectors.map(() => item.textContent)

//   if (itemTextList.includes(userMinistries[index])) {
//     console.log(item)
//     console.log(index)
//     item.classList.add('select-ministry__item_active')
//   }
// })

}



//------------- кнопки
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
  setMinistryEventListeners()
  userDataGetInfo();
  // console.log(userData);
})

formMinistryButtonBack.addEventListener('click', () => {
  ministrySection.classList.remove('form-container_visible');
  infoSection.classList.add('form-container_visible');
  unsetMinistryEventListeners()
})

formMinistryButtonForward.addEventListener('click', () => {
  ministrySection.classList.remove('form-container_visible');
  themeSection.classList.add('form-container_visible');
  // getActiveMinistry();
  const array = getActiveMinistry();
  // console.log(array);
  userData.ministries = array.map((item) => {
    return  ' ' + item + ' ';
  });
  unsetMinistryEventListeners()
  userData.ministries.forEach((key, index) => {
     getPoem(key, index);
    })
  // console.log(userData.ministries)
})

formThemeButtonBack.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  ministrySection.classList.add('form-container_visible');
  setMinistryEventListeners()
})

formThemeButtonForward.addEventListener('click', () => {
  themeSection.classList.remove('form-container_visible');
  confirmSection.classList.add('form-container_visible');
  claimSection.classList.add('form-container_visible');
  userClaimGetInfo();
  setConfirmValues();
  // console.log(userData.ministries)
  // setConfirmMinistries();

})

formThemeButtonForward.addEventListener('click', () => {
  // console.log(userData.ministries)
  const claimsList = Array.from(document.querySelectorAll('.claim'));
  innerClaimsList = claimsList;
  document.querySelector('#claim1').classList.add('claim__show')
  setConfirmMinistries()
})


// const claimsList = document.querySelectorAll('.claim');
// claimsList[0].classList.add('.claim__show')

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



function userDataGetInfo() {

  userData.name = inputName.value;
  userData.lastName = inputLastName.value;
  userData.phone = inputPhone.value;
  userData.email = inputEmail.value;
  userData.address = inputAddress.value;
  // userData.claim = inputClaim.value;

  // return console.log(userData);
}

function userClaimGetInfo() {
  userData.claim = inputClaim.value;
}

function getActiveMinistry() {
  const activeMinistry = Array.from(ministrySection.querySelectorAll('.active-ministry'));
  const activeMinistryNames = activeMinistry.map((item) => {
    const text = item.querySelector('.form-flex__title').textContent.slice(13)
    // text.slice(13)
    // return item.querySelector('.form-flex__title').textContent;
    return text.slice(0, text.length - 2)
  })

return activeMinistryNames;
}





function getPoem(key, index) {
  fetch(`http://www.buymebuyme.xyz?q=${key}`)
  .then(res => res.json())
  .then((data) => {const obj1 = data;
    let result = obj1.map(({ fields }) => fields.text);


    let poem = result.filter(item => item.length < 1200);
    let randomPoem = poem[Math.floor((Math.random() * poem.length))];


   claimSection.insertAdjacentHTML ('afterbegin', `
   <section id="claim${index + 1}" class="claim form-container form-container_claim">
   <div class="claim__header">
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
 </div>
 </section>`
 )


    // let randomPoem = result[Math.floor((Math.random() * result.length))];
    // console.log(randomPoem)
    // function add (poem) { container.textcontet = poem}
  })
}



// const claims = document.querySelectorAll('.claim');
// const currentClaim = 0;
// const claimInterval = setInterval(nextSlide,2000);

// function nextClaim() {
//     claims[currentClaim].classList.add('claim');
//     currentClaim = (currentClaim+1)%claims.length;
//     claims[currentClaim].classList.add('claim__show');
// }
