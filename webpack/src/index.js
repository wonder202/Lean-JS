import a_number from './a.js'
import b_number from './b.js'
import c_number from './c.js'
console.log('a;', a_number)
console.log('b;', b_number)
console.log('c;', c_number)

const a = document.querySelector('#button-a');
const b = document.querySelector('#button-b');
const c = document.querySelector('#button-c');
const display = document.querySelector('#display');

a.addEventListener('click', function() {
    display.textContent = a_number
});
b.addEventListener('click', function() {
    display.textContent = b_number
});
c.addEventListener('click', function() {
    display.textContent = c_number
});