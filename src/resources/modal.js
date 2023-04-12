// Работа модального окна "Купить в один клик"
const btnOneclickOpen = document.querySelector(".product__oneclick");
const btnOneclickClose = document.querySelector(".modal__buy__close");
const modalBuy = document.querySelector('.modal__buy');

btnOneclickOpen.addEventListener('click', function(){
  modalBuy.classList.add('modal__buy-open');
})

btnOneclickClose.addEventListener('click', function(){
  modalBuy.classList.remove('modal__buy-open');
})

// Работа модального окна "Перезвоним"
const modalThanks = document.querySelector('.modal__thanks');
const btnThanksClose = document.querySelector(".modal__thanks__close");

btnThanksClose.addEventListener('click', function(){
  modalThanks.classList.remove('modal__thanks-open');
})

// Работа модального окна "Просмотр"

const modalPreview = document.querySelector('.modal__preview');
const btnPreviewClose = document.querySelector('.modal__preview__close');

document.querySelector('.product__photo__item-main').addEventListener('click', function(event){
  event.preventDefault();
  modalPreview.classList.add('modal__preview-open');
})
btnPreviewClose.addEventListener('click', function(){
  modalPreview.classList.remove('modal__preview-open');
})

// Валидация полей формы модального окна

// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const NAME_REGEXP =  /^[0-9A-ZА-ЯЁ]+$/i;
const PHONE_REGEXP =  /^((\+7|7|8)+([0-9]){10})$/i;

const modalSubmit = document.querySelector('.modal__buy__submit');
const modalName = document.querySelector('.modal__buy__name');
const modalPhone = document.querySelector('.modal__buy__phone');
const modalCheckbox = document.querySelector('.modal__buy__checkbox');

modalSubmit.addEventListener('click', (event) => {
  event.preventDefault();  
  validateName();
  validatePhone();
  validateCheckbox();
  if (isNameValid(modalName.value.trim()) 
        && isPhoneValid(modalPhone.value.trim())
        && isCheckboxChecked()) {

    modalBuy.classList.remove('modal__buy-open');
    modalThanks.classList.add('modal__thanks-open');
  };
})

function validateName() {  
  if (isNameValid(modalName.value.trim())) {
    modalName.classList.remove('error');
    modalName.classList.add('success');
    modalName.previousElementSibling.classList.remove('error__text-show');
  }
  else{
    modalName.classList.remove('success');
    modalName.classList.add('error');
    modalName.previousElementSibling.classList.add('error__text-show');
  }
}
function validatePhone() {  
  if (isPhoneValid(modalPhone.value.trim())) {
    modalPhone.classList.remove('error');
    modalPhone.classList.add('success');
    modalPhone.previousElementSibling.classList.remove('error__text-show');
  }
  else{
    modalPhone.classList.remove('success');
    modalPhone.classList.add('error');
    modalPhone.previousElementSibling.classList.add('error__text-show');
  }
}

function validateCheckbox() {
  if (!isCheckboxChecked()) {
    document.querySelector('.modal__buy__agreement').classList.add('modal__buy__agreement-error')
  }
  else {
    document.querySelector('.modal__buy__agreement').classList.remove('modal__buy__agreement-error')
  }
}

function isNameValid(name) {
  return NAME_REGEXP.test(name);
}
function isPhoneValid(phone) {
  return PHONE_REGEXP.test(phone);
}
function isCheckboxChecked() {
  return modalCheckbox.checked;
}