const inputArea = document.querySelector('#name-input');

const contentSpan = document.querySelector('#name-output');

inputArea.addEventListener('input', (ev)=>
(inputArea.value==='')
? contentSpan.textContent='Anonymous' 
: contentSpan.textContent=ev.currentTarget.value)