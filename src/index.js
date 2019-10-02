import './css/reset.css'
import './css/styles.css';

import pageLoader from './pageLoader.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

//intial load
pageLoader();
about();

const tabSwitcher = document.getElementById('tabSwitcher');
const contentDiv = document.getElementById('contentDiv');

//about button
const aboutButton = document.createElement('button');
aboutButton.textContent = 'about';
tabSwitcher.appendChild(aboutButton);

aboutButton.addEventListener('click', () => {
    contentDiv.innerHTML= '';
    about();
});

//menu button
const menuButton = document.createElement('button');
menuButton.textContent = 'menu';
tabSwitcher.appendChild(menuButton);

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML= '';
    menu();
});

//contact button
const contactButton = document.createElement('button');
contactButton.textContent = 'contact';
tabSwitcher.appendChild(contactButton);

contactButton.addEventListener('click', () => {
    contentDiv.innerHTML= '';
    contact();
});