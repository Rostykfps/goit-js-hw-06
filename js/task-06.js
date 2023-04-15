// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputTextEl = document.querySelector('#validation-input');
const inputLength = Number(inputTextEl.dataset.length);

inputTextEl.addEventListener('blur', () => {
  if (
    inputTextEl.value.length !== inputLength &&
    inputTextEl.value.length > 0
  ) {
    inputTextEl.classList.add('invalid');
  } else {
    inputTextEl.classList.remove('invalid');
  }
  if (inputTextEl.value.length === inputLength) {
    inputTextEl.classList.add('valid');
  } else {
    inputTextEl.classList.remove('valid');
  }
});
