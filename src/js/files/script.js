// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Intro slide chande onhover 
const introSliderCats = document.querySelectorAll('.categories-intro__item');

function changeSlide(i) {

}

if (introSliderCats.length) {
    introSliderCats.forEach((cat, i) => {
        cat.addEventListener('mouseover', () => {
            const introSliderDots = document.querySelectorAll('.intro__pagination .swiper-pagination-bullet');
            introSliderDots[i].click();
        });
    })
}

//========================================================================================================================================================

// OneClick buy

const popupFormOrder = document.querySelector('#order');
const orderButton = document.querySelector('.char-product__actions .js-open-order');

if (popupFormOrder && orderButton) {
    const productTitle = document.querySelector('.info-product__title');
    const productImage = document.querySelector('.info-product__slide');
    const productPrice = document.querySelector('.product_price');

    popupFormOrder.querySelector('.p_order__title').innerHTML = productTitle.innerHTML;
    popupFormOrder.querySelector('.p_order__image').innerHTML = productImage.innerHTML;
    popupFormOrder.querySelector('.p_order__price').innerHTML = productPrice.innerHTML + ' руб.';
}