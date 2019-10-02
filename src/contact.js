
const contact = () => {

    const contentDiv = document.getElementById('contentDiv');

    const contactDiv = document.createElement('div');

    const contactContent = document.createElement('p');
    contactContent.textContent = 'contact content here!';
    contactDiv.appendChild(contactContent);

    contentDiv.appendChild(contactDiv);

};

export default contact;