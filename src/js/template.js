import menuData from '../menu.json';
import templateMenu from '../templates/menuCard.hbs';

//Создание и рендер разметки
const menu = templateMenu({ menuData });
const listMenu = document.querySelector(".menu.js-menu");

listMenu.insertAdjacentHTML('beforeend', menu);