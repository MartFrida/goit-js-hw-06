const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

ingredients.forEach(elem => {
  const elemItem = document.createElement('li');
  elemItem.innerText = elem;
  elemItem.className = 'item';
  listIngredients.append(elemItem);
});




