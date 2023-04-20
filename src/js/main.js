
const swiper = document.querySelectorAll('.swiper');

if (swiper.length !== 0) {
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
    const swiperModal = new Swiper('.swipper__modal', {
      slidesPerView: 'auto',
      allowSlideNext: true,
      allowSlidePrev: true,  
      loop: false,
      // spaceBetween: 80,
      watchOverflow: false,
      setWrapperSize: true,
      
      navigation: {
        disabledClass: 'modal__preview__disabled',
        nextEl: '.modal__preview__next',
        prevEl: '.modal__preview__prev',
      },
    
      breakpoints: {
        320: {
          width: 180, 
        },
        722: {
          // width: 466,
        },  
        927: {
        },  
        1406: {
        }
      }
    });
  
  // Активация swipper на странице с каталогом товаров
    const swiperCatalog = new Swiper(".catalog__slider", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 3,
      },
      spaceBetween: 32,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 32,
        }
      }
    });
  
  
    // Активация swipper на главной странице hero-slider
    const swiperHero = new Swiper(".index__hero", {
      pagination: {
        el: ".index__hero__pagination",
        clickable: true,
      },
    });
  
    // Активация swipper на главной странице раздел Special
    const swiperSpecial = new Swiper('.index__special__slider', {
      slidesPerView: 'auto',
      allowSlideNext: true,
      allowSlidePrev: true,  
      loop: false,
      spaceBetween: 32,
      watchOverflow: false,
      setWrapperSize: true,
      
      navigation: {
        disabledClass: 'index__special__disabled',
        nextEl: '.index__special__next',
        prevEl: '.index__special__pred',
      },
    });
  
  
    // Активация swipper на главной странице раздел Usefull
    const swiperUsefull = new Swiper('.index__usefull__slider', {
      slidesPerView: '2',
      allowSlideNext: true,
      allowSlidePrev: true,  
      loop: false,
      spaceBetween: 32,
      watchOverflow: false,
      setWrapperSize: true,
      
      navigation: {
        disabledClass: 'index__usefull__disabled',
        nextEl: '.index__usefull__next',
        prevEl: '.index__usefull__pred',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          // spaceBetween: 20,
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
          slidesPerView: 2,
          spaceBetween: 32,
        }
      }
    });
}



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

// Работа фильтра "Цена товара" страница с каталогом

const progressbar = document.getElementById('progressbar');

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