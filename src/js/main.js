console.log('main.js');

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