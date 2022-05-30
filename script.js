"use strict";

function activeSlide(activeSlide = 0) {
    let slides = document.querySelectorAll(".slide"); // находим все слайды
    slides[activeSlide].classList.add("active"); // перебираем все сллайды и по клику добавляем класс активности
    for (let i of slides) {
        i.addEventListener("click", () => {
            clearActiveClasses();

            i.classList.add("active"); // добавить active к нужному
        });
    }
    // убираем класс активности у слайдов
    function clearActiveClasses() {
        slides.forEach((i) => {
            i.classList.remove("active");
        });
    }
}

activeSlide();