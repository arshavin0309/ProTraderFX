document.addEventListener('DOMContentLoaded', () => {
    let headerBurger = document.querySelector('.header__burger');
    let headerMenu = document.querySelector('header .menu');

    headerBurger.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
    });
});