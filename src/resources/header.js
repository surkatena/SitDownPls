function header() {
  console.log('header.js');
  const header = document.querySelector('.header');
  header.innerHTML = 
  `<div class="container">
    <div class="header__top">
      <div class="header__contacts">
        <div class="header__region region">
          <label class="region__label">
            <span class="region__text"> Ваш регион:</span>
            <div class="region__select select" id="regionSelect" tabindex="1">
              <div class="region__select__header select__header">
                <span class="region__select__current select__current">Москва</p>
              </div>
              <div class="region__dropdown dropdown">
                <span class="region__dropdown__item dropdown__item visually-hidden">Москва</span>
                <span class="region__dropdown__item dropdown__item">Казань</span>
                <span class="region__dropdown__item dropdown__item">Уфа</span>
                <span class="region__dropdown__item dropdown__item">Пермь</span>
              </div>
            </div>
          </label>
        </div>
        <div class="header__phone">
          <svg class="header__phone__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z" fill="#FF862F"/>
          </svg>
          <a href="tel:+74958854547" class="header__phone__number" >+7 (495) 885-45-47</a>
        </div>
      </div>
      <div class="header__info">
        <ul class="header__info__list">
          <li class="header__info__item">
            <a href="#" class="header__info__link">
              О&nbsp;компании
            </a>
          </li>
          <li class="header__info__item">
            <a href="#" class="header__info__link">
              Гарантия и&nbsp;возврат
            </a>
          </li>
          <li class="header__info__item">
            <a href="#" class="header__info__link">
              Корпоративным клиентам
            </a>
          </li>
          <li class="header__info__item">
            <a href="#" class="header__info__link">
              Дизайн-решение
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__middle">
      <div class="header__logo">
        <svg>
          <use xlink:href="./images/sprite.svg#logo"></use>
        </svg>
      </div>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">
              Каталог
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Магазины
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Шоу-рум
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Доставка и&nbsp;оплата
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Дисконт
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__bottom">
      <div class="header__search search">
        <form class="search__form" action="#" method="get">
          <label for="" class="search__label">
            <input class="search__input" type="text" id="searchItem" placeholder="Я&nbsp;хочу купить...">
            <svg class="search__icon-loop" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8187 14.0625L12.607 11.3156C13.5516 10.0945 14.0625 8.60156 14.0625 7.03125C14.0625 5.15156 13.3289 3.38906 12.0023 2.06016C10.6758 0.73125 8.90859 0 7.03125 0C5.15391 0 3.38672 0.733594 2.06016 2.06016C0.73125 3.38672 0 5.15156 0 7.03125C0 8.90859 0.733594 10.6758 2.06016 12.0023C3.38672 13.3312 5.15156 14.0625 7.03125 14.0625C8.60156 14.0625 10.0922 13.5516 11.3133 12.6094L14.5249 15.3539C14.5428 15.3718 14.564 15.3859 14.5873 15.3956C14.6106 15.4053 14.6356 15.4102 14.6609 15.4102C14.6861 15.4102 14.7111 15.4053 14.7344 15.3956C14.7578 15.3859 14.7789 15.3718 14.7968 15.3539L15.8187 14.3344C15.8365 14.3165 15.8507 14.2953 15.8604 14.272C15.87 14.2487 15.875 14.2237 15.875 14.1984C15.875 14.1732 15.87 14.1482 15.8604 14.1249C15.8507 14.1015 15.8365 14.0803 15.8187 14.0625ZM10.7438 10.7438C9.75 11.7352 8.43281 12.2812 7.03125 12.2812C5.62969 12.2812 4.3125 11.7352 3.31875 10.7438C2.32734 9.75 1.78125 8.43281 1.78125 7.03125C1.78125 5.62969 2.32734 4.31016 3.31875 3.31875C4.3125 2.32734 5.62969 1.78125 7.03125 1.78125C8.43281 1.78125 9.75234 2.325 10.7438 3.31875C11.7352 4.3125 12.2812 5.62969 12.2812 7.03125C12.2812 8.43281 11.7352 9.75234 10.7438 10.7438Z" fill="#999999"/>
            </svg> 
            <button class="search__btn">
              <svg class="search__icon-arrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_663_1899)">
                  <!-- <path d="M14 11L19 16L14 21" stroke="#A65CF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> -->
                  <path d="M14 11L19 16L14 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="16" cy="16" r="15" stroke="#A65CF0" stroke-width="2"/>
                </g>
              </svg>                  
            </button>             
          </label>
          <div class="search__select select" tabindex="0">
            <div class="search__select__header select__header">
              <span class="search__select__current select__current">Категория</span>
            </div>
            <div class="search__dropdown dropdown">
              <span class="search__dropdown__item dropdown__item">Диваны</span>
              <span class="search__dropdown__item dropdown__item">Кресла</span>
              <span class="search__dropdown__item dropdown__item">Пуфы</span>
              <span class="search__dropdown__item dropdown__item">Кровати</span>
              <span class="search__dropdown__item dropdown__item">Тумбы</span>
              <span class="search__dropdown__item dropdown__item">Комоды</span>
              <span class="search__dropdown__item dropdown__item">Стулья</span>
              <span class="search__dropdown__item dropdown__item">Столы</span>
              <span class="search__dropdown__item dropdown__item">Аксессуары</span>
            </div>
          </div>
        </form>
      </div>
      <div class="header__personal personal">
        <button class="personal__accaunt">
          <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.98 22.8503C24.3278 21.2785 23.3813 19.8508 22.1933 18.6467C21.0089 17.4392 19.6059 16.4764 18.0617 15.8116C18.0478 15.8045 18.034 15.801 18.0202 15.794C20.1742 14.2111 21.5744 11.6327 21.5744 8.72362C21.5744 3.90452 17.7367 0 13 0C8.26333 0 4.42559 3.90452 4.42559 8.72362C4.42559 11.6327 5.82585 14.2111 7.97982 15.7975C7.96599 15.8045 7.95216 15.808 7.93833 15.8151C6.38941 16.4799 4.99952 17.4332 3.80671 18.6503C2.61981 19.8553 1.67349 21.2827 1.02003 22.8538C0.37806 24.3918 0.0318323 26.0409 8.64563e-05 27.7116C-0.000836348 27.7491 0.00563604 27.7864 0.0191224 27.8214C0.0326088 27.8564 0.0528363 27.8882 0.0786128 27.9151C0.104389 27.942 0.135194 27.9633 0.16921 27.9779C0.203227 27.9925 0.239768 28 0.27668 28H2.35113C2.50326 28 2.62427 27.8769 2.62773 27.7256C2.69688 25.01 3.76868 22.4668 5.66335 20.5392C7.62371 18.5447 10.2271 17.4472 13 17.4472C15.7729 17.4472 18.3763 18.5447 20.3367 20.5392C22.2313 22.4668 23.3031 25.01 23.3723 27.7256C23.3757 27.8804 23.4967 28 23.6489 28H25.7233C25.7602 28 25.7968 27.9925 25.8308 27.9779C25.8648 27.9633 25.8956 27.942 25.9214 27.9151C25.9472 27.8882 25.9674 27.8564 25.9809 27.8214C25.9944 27.7864 26.0008 27.7491 25.9999 27.7116C25.9653 26.0301 25.6231 24.3945 24.98 22.8503ZM13 14.7739C11.413 14.7739 9.91943 14.1442 8.79577 13.001C7.67211 11.8578 7.05323 10.3382 7.05323 8.72362C7.05323 7.10905 7.67211 5.58945 8.79577 4.44623C9.91943 3.30301 11.413 2.67337 13 2.67337C14.587 2.67337 16.0806 3.30301 17.2042 4.44623C18.3279 5.58945 18.9468 7.10905 18.9468 8.72362C18.9468 10.3382 18.3279 11.8578 17.2042 13.001C16.0806 14.1442 14.587 14.7739 13 14.7739Z" fill="#A65CF0"/>
          </svg>              
        </button>
        <button class="personal__cart">
          <span class="personal__cart__count">0</span>              
          <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8162 19.8503H8.90202L9.90191 17.7365L26.5154 17.7052C27.0772 17.7052 27.5588 17.2887 27.6591 16.7125L29.9599 3.34598C30.0201 2.99541 29.9298 2.63444 29.7091 2.36023C29.6 2.22528 29.4639 2.11658 29.3103 2.04166C29.1567 1.96674 28.9892 1.9274 28.8195 1.92637L7.68476 1.85348L7.50418 0.971861C7.39048 0.40957 6.90224 0 6.34712 0H1.18047C0.86739 0 0.567133 0.129087 0.345752 0.358864C0.124371 0.588641 0 0.900285 0 1.22524C0 1.55019 0.124371 1.86184 0.345752 2.09161C0.567133 2.32139 0.86739 2.45048 1.18047 2.45048H5.3907L6.17991 6.34486L8.12284 16.1086L5.62145 20.3466C5.49155 20.5286 5.4133 20.7446 5.39557 20.9704C5.37784 21.1961 5.42134 21.4225 5.52112 21.6239C5.72177 22.0369 6.12641 22.2973 6.57452 22.2973H8.67462C8.2269 22.9145 7.98508 23.6662 7.98573 24.4388C7.98573 26.4034 9.52402 28 11.4168 28C13.3096 28 14.8478 26.4034 14.8478 24.4388C14.8478 23.6648 14.6004 22.9116 14.159 22.2973H19.5463C19.0986 22.9145 18.8568 23.6662 18.8574 24.4388C18.8574 26.4034 20.3957 28 22.2885 28C24.1812 28 25.7195 26.4034 25.7195 24.4388C25.7195 23.6648 25.4721 22.9116 25.0307 22.2973H28.8195C29.4683 22.2973 30 21.7489 30 21.072C29.9981 20.7474 29.8725 20.4368 29.6507 20.2079C29.4289 19.979 29.1289 19.8504 28.8162 19.8503ZM8.17635 4.26925L27.4317 4.33519L25.5456 15.2964L10.4202 15.3242L8.17635 4.26925ZM11.4168 25.5356C10.8349 25.5356 10.36 25.0428 10.36 24.4388C10.36 23.8349 10.8349 23.342 11.4168 23.342C11.9987 23.342 12.4735 23.8349 12.4735 24.4388C12.4735 24.7297 12.3622 25.0087 12.164 25.2144C11.9658 25.4201 11.6971 25.5356 11.4168 25.5356ZM22.2885 25.5356C21.7066 25.5356 21.2317 25.0428 21.2317 24.4388C21.2317 23.8349 21.7066 23.342 22.2885 23.342C22.8704 23.342 23.3452 23.8349 23.3452 24.4388C23.3452 24.7297 23.2339 25.0087 23.0357 25.2144C22.8375 25.4201 22.5687 25.5356 22.2885 25.5356Z" fill="#A65CF0"/>
          </svg>
        </button>
      </div>
    </div>  
  </div>`
}

header();