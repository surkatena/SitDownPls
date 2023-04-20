
// Валидация полей формы на главной странице

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const NAME_REGEXP =  /^[0-9A-ZА-ЯЁ]+$/i;
// const NAME_REGEXP =  /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/i;
const PHONE_REGEXP =  /^((\+7|7|8)+([0-9]){10})$/i;

const formSubmit = document.querySelector('.index__feedback__submit');
const formName = document.querySelector('.index__feedback__name');
const formEmail = document.querySelector('.index__feedback__email');
const formPhone = document.querySelector('.index__feedback__phone');
const formCheckbox = document.querySelector('.index__feedback__checkbox');

formSubmit.addEventListener('click', (event) => {
  event.preventDefault();  
  validateName();
  validatePhone();
  validateEmail();
  validateCheckbox();
  if (isNameValid(formName.value.trim()) 
      && isPhoneValid(formPhone.value.trim())
      && isEmailValid(formEmail.value.trim())
      && isCheckboxChecked()){

    modalThanks.classList.add('modal__thanks-open');
    formName.value = '';
    formName.classList.remove('success');
    formPhone.value = '';
    formPhone.classList.remove('success');
    formEmail.value = '';
    formEmail.classList.remove('success');
  };
})

function validateEmail() {  
  if (isEmailValid(formEmail.value.trim())) {
    formEmail.classList.remove('error');
    formEmail.classList.add('success');
    formEmail.previousElementSibling.classList.remove('error__text-show');
  }
  else{
    formEmail.classList.remove('success');
    formEmail.classList.add('error');
    formEmail.previousElementSibling.classList.add('error__text-show');
  }
}

function validateName() {  
  if (isNameValid(formName.value.trim())) {
    formName.classList.remove('error');
    formName.classList.add('success');
    formName.previousElementSibling.classList.remove('error__text-show');
  }
  else{
    formName.classList.remove('success');
    formName.classList.add('error');
    formName.previousElementSibling.classList.add('error__text-show');
  }
}

function validatePhone() {  
  if (isPhoneValid(formPhone.value.trim())) {
    formPhone.classList.remove('error');
    formPhone.classList.add('success');
    formPhone.previousElementSibling.classList.remove('error__text-show');
  }
  else{
    formPhone.classList.remove('success');
    formPhone.classList.add('error');
    formPhone.previousElementSibling.classList.add('error__text-show');
  }
}

function validateCheckbox() {
  if (!isCheckboxChecked()) {
    document.querySelector('.index__feedback__agreement').classList.add('index__feedback__agreement-error')
  }
  else {
    document.querySelector('.index__feedback__agreement').classList.remove('index__feedback__agreement-error')
  }
}

function isNameValid(name) {
  return NAME_REGEXP.test(name);
}
function isPhoneValid(phone) {
  return PHONE_REGEXP.test(phone);
}
function isEmailValid(email) {
  return EMAIL_REGEXP.test(email);
}
function isCheckboxChecked() {
  return formCheckbox.checked;
}

// Работа модального окна "Перезвоним"
const modalThanks = document.querySelector('.modal__thanks');
const btnThanksClose = document.querySelector(".modal__thanks__close");

btnThanksClose.addEventListener('click', function(){
  modalThanks.classList.remove('modal__thanks-open');
})