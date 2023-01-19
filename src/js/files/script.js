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

