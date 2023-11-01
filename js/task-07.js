// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputControl = document.querySelector('#font-size-control');

const textForChange = document.querySelector('#text');

inputControl.addEventListener('input', () =>
  textForChange.style.fontSize = `${inputControl.value}px`
);
