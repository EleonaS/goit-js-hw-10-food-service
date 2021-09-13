/*Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление.*/

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const checkboxEl = document.querySelector('.theme-switch__toggle');

const themeInLocalStorage = localStorage.getItem('Theme');

(function openLastSavedTheme() {
   let defaultTheme = bodyEl.classList.add(Theme.LIGHT);

   if (themeInLocalStorage !== null) {
      defaultTheme = bodyEl.classList.remove(Theme.LIGHT);
      bodyEl.classList.add(themeInLocalStorage);

      if (bodyEl.classList.contains(Theme.DARK)) {
         checkboxEl.checked = true;
      }
   }

}());

//Добавление слушателя события на checkboxEl

checkboxEl.addEventListener('click', changeTheme);

function changeTheme(e) {

   if (checkboxEl.checked !== true) {
      bodyEl.classList.toggle(Theme.LIGHT);
      bodyEl.classList.toggle(Theme.DARK);
   };

   if (checkboxEl.checked === true) {
      bodyEl.classList.toggle(Theme.DARK);
      bodyEl.classList.toggle(Theme.LIGHT);
   };

   bodyEl.classList.contains(Theme.DARK) ? localStorage.setItem('Theme', Theme.DARK) : localStorage.setItem('Theme', Theme.LIGHT);
}