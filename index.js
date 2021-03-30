const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm red";
redParagraph.style.color = 'red';

container.appendChild(redParagraph);

const blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3";
blueHeader.style.color = 'blue';

container.appendChild(blueHeader);

const pinkDiv = document.createElement('div');
pinkDiv.style.border = '1px solid black';
pinkDiv.style.backgroundColor = 'pink';

const divHeader = document.createElement('h1');
divHeader.textContent = "I'm in a div";
const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";

pinkDiv.appendChild(divHeader);
pinkDiv.appendChild(divPara);

container.appendChild(pinkDiv);

