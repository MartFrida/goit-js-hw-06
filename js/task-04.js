const counterButtons = document.querySelectorAll('#counter button');

const decrement = document.querySelector('#counter button[data-action="decrement"]');

const increment = document.querySelector('#counter button[data-action="increment"]');

const counterPlace = document.querySelector('#value');

decrement.addEventListener('click', ()=>counterPlace.innerText--);

increment.addEventListener('click', ()=>counterPlace.innerText++);