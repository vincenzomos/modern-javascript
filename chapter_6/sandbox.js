// get an element by ID
const title= document.getElementById('page-title');
const title2 = document.querySelector('#page-title');
console.log(title);
console.log(title2);


// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

const paras2 = document.querySelectorAll('p');
console.log(paras2);