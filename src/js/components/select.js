let selectRegion = function() {
  let selectHeader = document.querySelectorAll('.region__select__header');
  let selectItem = document.querySelectorAll('.region__dropdown__item')

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)    
  })

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)    
  })

  function selectToggle() {
    this.parentElement.classList.toggle('select-open');
    
  }

  function selectChoose() {
    let text = this.textContent;
    let currentText = this.closest('.select').querySelector('.region__select__current');
    let select =  this.closest('.region__select');
    currentText.textContent = text;
    selectItem.forEach(item => {
      item.classList.remove('visually-hidden');
    })
    this.classList.add('visually-hidden');
    select.classList.remove('select-open');
  }
}

selectRegion();


let selectHeaderCategory = function() {
  let selectHeader = document.querySelectorAll('.search__select__header');
  let selectItem = document.querySelectorAll('.search__dropdown__item')

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)    
  })

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)    
  })

  function selectToggle() {
    this.parentElement.classList.toggle('select-open');
    
  }

  function selectChoose() {
    let text = this.textContent;
    let currentText = this.closest('.select').querySelector('.search__select__current');
    let select =  this.closest('.select');
    currentText.textContent = text;
    select.classList.remove('select-open');
  }
}

selectHeaderCategory();

const filterSelects = document.querySelectorAll('.filter__select');

if (filterSelects.length !== 0) {
  filterSelects.forEach ((el) => {
    el.addEventListener('click', selectToggle)
    
  })

  function selectToggle() {
    this.classList.toggle('select-open'); 
    console.log(this.parentElement.classList);   
  }
}