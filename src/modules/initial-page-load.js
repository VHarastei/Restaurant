
function createNavItem(id, text) {
    const item = document.createElement('button');
    item.classList.add('tab');
    item.innerText = text;
    item.setAttribute('id', id);

    return item;
}
function createNav(id) {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.setAttribute('id', id);
    
    const home = createNavItem('home', 'Home');
    const menu = createNavItem('menu', 'Menu');
    const contactUs = createNavItem('contact-us', 'Contact us');

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contactUs);

    nav.addEventListener('click', (e) => {
        e.preventDefault();
        nav.childNodes.forEach(item => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
            }
        }) 
        e.target.classList.add('active');
    })

    return nav;
}
function createMainContent(id) {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.setAttribute('id', id);

    return mainContent;
}
function createFooter(id) {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.setAttribute('id', id);

    const text = document.createElement('p');
    text.innerText = 'Copyright ©VH 2020. All rights reserved.';

    footer.appendChild(text);
    
    return footer;
}

function pageLoad() {
    const content = document.getElementById('content');

    const nav = createNav('nav');
    const mainText = createMainContent('main-text');
    const footer = createFooter('footer');

    content.appendChild(nav);
    content.appendChild(mainText);
    content.appendChild(footer);
}

export default pageLoad;
