const counterButtons = document.querySelectorAll('#counter button');

const decrement = document.querySelector('#counter button[data-action="decrement"]');

const increment = document.querySelector('#counter button[data-action="increment"]');

const counterValue = document.querySelector('#value');

decrement.addEventListener('click', ()=>counterValue.innerText--);

increment.addEventListener('click', ()=>counterValue.innerText++);