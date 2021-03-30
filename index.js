const container = document.querySelector('#container');

const redParagraph = document.createElement('div');
redParagraph.textContent = "Hey I'm red";
redParagraph.style.color = 'red';

container.appendChild(redParagraph);