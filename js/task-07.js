// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = fontSizeControlEl.value + 'px';

const fontSizeControl = event => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
};

fontSizeControlEl.addEventListener('input', fontSizeControl);
