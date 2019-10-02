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

    //content creation
    const contentDiv = document.createElement('div');

    const contentTitle = document.createElement('h2');
    contentTitle.textContent = 'About us'

    const contentBody = document.createElement('p');
    contentBody.textContent = 'Lorem Ipsum.'

    contentDiv.appendChild(contentTitle);
    contentDiv.appendChild(contentBody);
    contentContainer.appendChild(contentDiv);
};

export default pageLoader;