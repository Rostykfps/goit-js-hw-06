// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');

const incrementClick = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};
const decrementClick = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', incrementClick);
decrementBtnEl.addEventListener('click', decrementClick);
