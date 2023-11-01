
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('#controls > [data-create]');
const btnDestroy = document.querySelector('#controls > [data-destroy]');
const boxesContainer = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => createBoxes(input.value));

btnDestroy.addEventListener('click', () => destroyBoxes());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];
  let step = 0;
  let size = 30;

  for (let index = 0; index < amount; index++) {
    const divEl = document.createElement('button');
    step += 10;
    divEl.style.width = `${size + step}px`;
    divEl.style.height = `${size + step}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);

  }
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.remove();
}