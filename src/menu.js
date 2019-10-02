
const menu = () => {

    const contentDiv = document.getElementById('contentDiv');

    const menuDiv = document.createElement('div');

    const menuContent = document.createElement('p');
    menuContent.textContent = 'menu content here!';
    menuDiv.appendChild(menuContent);

    contentDiv.appendChild(menuDiv);

};

export default menu;