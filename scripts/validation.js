const form = document.querySelector('.form-info')



function showError(input) {



  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add('form__input_invalid');
  error.classList.add('form__error_visible');
}
function hideError(input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove('form__input_invalid')
  error.classList.remove('form__error_visible')
}

function checkInputValidity(input) {
  if(!input.validity.valid){
    showError(input)
  } else {
    hideError(input)
  }
}

function setButtonState (button, isActive) {
  if(isActive){
    button.classList.remove('form__button_invalid');
    button.disabled = false;
  } else {
    button.classList.add('form__button_invalid');
    button.disabled = true;
  }
}

// function setEventListeners(form, config) {
//   const inputsList = form.querySelectorAll(config.inputSelector);
//   const submitButton = form.querySelector(config.submitButtonSelector);

//   inputsList.forEach((input) => {
//     input.addEventListener('input', () => {
//       checkInputValidity(form, input, config);
//       setButtonState (submitButton, form.checkValidity(), config)
//     });
//   })
// }


function setEventListeners() {
  const inputsList = form.querySelectorAll('.form__input');
  const submitButton = form.querySelector('#form-info-forward-button');

  inputsList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(input);
      setButtonState (submitButton, form.checkValidity())
    });
  })
}

function enableValidation() {
  setEventListeners();
  const submitButton = form.querySelector('#form-info-forward-button');
  submitButton.disabled = true;
}

