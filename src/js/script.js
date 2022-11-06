const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuList = document.querySelector('.menu__list'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
menuList.addEventListener('click', () => {
    menu.classList.remove('active');
});