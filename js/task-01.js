const categories = [...document.querySelector('#categories').children];
console.log(`Number of categories: ${categories.length}`);
categories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.innerHTML}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`)
});