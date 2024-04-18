document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".home-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

window.onload = function () {
    var overlay = document.querySelector('.form-overlay');
    overlay.style.height = window.innerHeight + 'px';
};
