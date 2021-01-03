function homeLoad() {
    const mainContent = document.querySelector('.main-content');
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild);
    }
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');
    
    const content = document.getElementById('content');
    content.style.backgroundImage = "url('../dist/images/home-background.jpg')";
    content.style.height = 100 + 'vh';
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Olive Garden';

    const p = document.createElement('p');
    p.innerText = 'Natural and healthy food for everyone';

    homePage.appendChild(h1);
    homePage.appendChild(p);    

    mainContent.appendChild(homePage);
}

export default homeLoad;