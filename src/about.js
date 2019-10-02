
const about = () => {

    const contentDiv = document.getElementById('contentDiv');

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('childContentDiv');

    const aboutContent = document.createElement('p');
    aboutContent.textContent = 'about content here!';
    aboutDiv.appendChild(aboutContent);

    contentDiv.appendChild(aboutDiv);

};

export default about;