console.log('main.js');

// Активация swipper на странице с карточкой товара "Похожие товары"

const swiperCard = new Swiper('.other__bottom', {
  slidesPerView: 2,
  allowSlideNext: true,
  allowSlidePrev: true,  
  loop: false,
  spaceBetween: 32,
  watchOverflow: true,
  
  navigation: {
    disabledClass: 'other__disabled',
    nextEl: '.other__next',
    prevEl: '.other__pred',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    722: {
      slidesPerView: 2,
      spaceBetween: 32,
    },  
    927: {
      slidesPerView: 3,
      spaceBetween: 32,
    },  
    1406: {
      slidesPerView: 4,
      spaceBetween: 32,
    },  
    1715: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  }
});

// Активация swipper на странице с карточкой товара модальное окно

// const modalSlider = document.querySelector('.swipper__modal');

// if (modalSlider) {
  const swiperModal = new Swiper('.swipper__modal', {
    slidesPerView: 2,
    allowSlideNext: true,
    allowSlidePrev: true,  
    loop: false,
    spaceBetween: 80,
    watchOverflow: false,
    setWrapperSize: true,
    
    navigation: {
      disabledClass: 'modal__preview__disabled',
      nextEl: '.modal__preview__next',
      prevEl: '.modal__preview__prev',
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      722: {
        slidesPerView: 1,
        spaceBetween: 80,
      },  
      927: {
        slidesPerView: 3,
        spaceBetween: 78,
      },  
      1406: {
        slidesPerView: 3,
        spaceBetween: 78,
      }
    }
  });
// }



// Активация swipper на странице с каталогом товаров

  const swiperCatalog = new Swiper(".catalog__slider", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 3,
    },
    spaceBetween: 32,
    // pagination: {
    //   el: ".catalog__btn",
    //   clickable: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


// Работа кнопки бургер меню

const burgerBtn = document.querySelector('.burger');
const navItems = [...document.querySelectorAll('.nav__link')];

burgerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  burgerBtn.classList.toggle('burger-open');
})

for (let item of navItems) {
  item.addEventListener('click', function() {
    if (this.closest('nav')) {
      burgerClose()
    }
  })
}

function burgerClose() {
  burgerBtn.classList.remove('burger-open');
}


// // Работа модального окна "Купить в один клик"
// const btnOneclickOpen = document.querySelector(".product__oneclick");
// const btnOneclickClose = document.querySelector(".modal__buy__close");
// const modalBuy = document.querySelector('.modal__buy');

// btnOneclickOpen.addEventListener('click', function(){
//   modalBuy.classList.add('modal__buy-open');
// })

// btnOneclickClose.addEventListener('click', function(){
//   modalBuy.classList.remove('modal__buy-open');
// })

// // Работа модального окна "Перезвоним"
// const modalThanks = document.querySelector('.modal__thanks');
// const btnThanksClose = document.querySelector(".modal__thanks__close");

// btnThanksClose.addEventListener('click', function(){
//   modalThanks.classList.remove('modal__thanks-open');
// })

// // Работа модального окна "Просмотр"

// const modalPreview = document.querySelector('.modal__preview');
// const btnPreviewClose = document.querySelector('.modal__preview__close');

// document.querySelector('.product__photo__item-main').addEventListener('click', function(event){
//   event.preventDefault();
//   modalPreview.classList.add('modal__preview-open');
// })
// btnPreviewClose.addEventListener('click', function(){
//   modalPreview.classList.remove('modal__preview-open');
// })

// Валидация полей формы модального окна

// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const NAME_REGEXP =  /^[0-9A-ZА-ЯЁ]+$/i;
// // const NAME_REGEXP =  /^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/i;
// const PHONE_REGEXP =  /^((\+7|7|8)+([0-9]){10})$/i;

// const modalSubmit = document.querySelector('.modal__buy__submit');
// const modalName = document.querySelector('.modal__buy__name');
// const modalPhone = document.querySelector('.modal__buy__phone');
// const modalCheckbox = document.querySelector('.modal__buy__checkbox');

// modalSubmit.addEventListener('click', (event) => {
//   event.preventDefault();  
//   validateName();
//   validatePhone();
//   validateCheckbox();
//   if (isNameValid(modalName.value.trim()) 
//         && isPhoneValid(modalPhone.value.trim())
//         && isCheckboxChecked()) {

//     modalBuy.classList.remove('modal__buy-open');
//     // modalName.value = "";
//     // modalPhone.value = "";
//     modalThanks.classList.add('modal__thanks-open');
//   };
// })

// // function validEmail() {  
// //   if (isEmailValid(contactsEmail.value.trim())) {
// //     contactsEmail.classList.remove('contacts__error__input');
// //     document.querySelector('.contacts__label-email').classList.remove('contacts__error');
// //   }
// //   else{
// //     contactsEmail.classList.add('contacts__error__input');
// //     document.querySelector('.contacts__label-email').classList.add('contacts__error');
// //   }
// // }
// function validateName() {  
//   if (isNameValid(modalName.value.trim())) {
//     modalName.classList.remove('error');
//     modalName.classList.add('success');
//     modalName.previousElementSibling.classList.remove('error__text-show');
//   }
//   else{
//     modalName.classList.remove('success');
//     modalName.classList.add('error');
//     modalName.previousElementSibling.classList.add('error__text-show');
//   }
// }
// function validatePhone() {  
//   if (isPhoneValid(modalPhone.value.trim())) {
//     modalPhone.classList.remove('error');
//     modalPhone.classList.add('success');
//     modalPhone.previousElementSibling.classList.remove('error__text-show');
//   }
//   else{
//     modalPhone.classList.remove('success');
//     modalPhone.classList.add('error');
//     modalPhone.previousElementSibling.classList.add('error__text-show');
//   }
// }

// function validateCheckbox() {
//   if (!isCheckboxChecked()) {
//     document.querySelector('.modal__buy__agreement').classList.add('modal__buy__agreement-error')
//   }
//   else {
//     document.querySelector('.modal__buy__agreement').classList.remove('modal__buy__agreement-error')
//   }
// }

// function isNameValid(name) {
//   return NAME_REGEXP.test(name);
// }
// function isPhoneValid(phone) {
//   return PHONE_REGEXP.test(phone);
// }
// function isCheckboxChecked() {
//   return modalCheckbox.checked;
// }

var progressbar = document.getElementById('progressbar');


if (progressbar) {
  noUiSlider.create(progressbar, {
      start: [2000, 150000],
      connect: true,
      step: 10,
      range: {
          'min': 0,
          'max': 999999
      }
  })

  const inputMax = document.getElementById('input-max');
  const inputMin = document.getElementById('input-min');
  const inputs = [ inputMin, inputMax ];

  progressbar.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle])
  })

  const setProgressbar = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);
    progressbar.noUiSlider.set(arr)
  }

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setProgressbar(index, e.currentTarget.value);
    })
  })

}