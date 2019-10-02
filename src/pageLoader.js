import Counter from './imgs/counter.jpg';

const pageLoader = () => {

    const contentContainer = document.getElementById('content');
    
    //header creation
    const headerDiv = document.createElement('div');

    const counterImage = new Image();
    counterImage.src = Counter;
    counterImage.classList.add('header-img');

    const titleText = document.createElement('h1');
    titleText.textContent = 'Hang ten.';
    titleText.classList.add('header-text');
 
    headerDiv.appendChild(counterImage);
    headerDiv.appendChild(titleText);
    contentContainer.appendChild(headerDiv);

    //tab switcher
    const tabDiv = document.createElement('div');
    contentContainer.appendChild(tabDiv);
    tabDiv.id = 'tabSwitcher';

    //content creation
    const contentDiv = document.createElement('div');

    contentContainer.appendChild(contentDiv);
    contentDiv.id = "contentDiv"
};

export default pageLoader;