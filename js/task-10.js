function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesEl = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

boxesEl.btnCreate.addEventListener('click', onCreateCollection);
boxesEl.btnDestroy.addEventListener('click', onDestroyCollection);

function onCreateCollection() {
  createBoxes(boxesEl.input.value);
}

function onDestroyCollection() {
  destroyBoxes();
  boxesEl.input.value = '';
}

function createBoxes(amount) {
  let sizeBox = 30;
  const newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');

    newBox.style.width = sizeBox + 'px';
    newBox.style.height = sizeBox + 'px';
    newBox.style.backgroundColor = getRandomHexColor();

    newBoxes.push(newBox);
    sizeBox += 10;
  }
  boxesEl.boxes.append(...newBoxes);
}

function destroyBoxes() {
  boxesEl.boxes.innerHTML = '';
}
