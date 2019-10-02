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
aboutButton.classList.add('tab-links');
aboutButton.textContent = 'about';
tabSwitcher.appendChild(aboutButton);

aboutButton.addEventListener('click', (event) => {
    contentDiv.innerHTML= '';
    about();

    let i, tablinks;
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.classList.add('active');
});
//default open tab
aboutButton.click();

//menu button
const menuButton = document.createElement('button');
menuButton.classList.add('tab-links');
menuButton.textContent = 'menu';
tabSwitcher.appendChild(menuButton);

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML= '';
    menu();

    let i, tablinks;
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.classList.add('active');
});

//contact button
const contactButton = document.createElement('button');
contactButton.classList.add('tab-links');
contactButton.textContent = 'contact';
tabSwitcher.appendChild(contactButton);

contactButton.addEventListener('click', () => {
    contentDiv.innerHTML= '';
    contact();

    let i, tablinks;
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.classList.add('active');
});