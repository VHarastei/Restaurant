import pageLoad from './modules/initial-page-load';
import homeLoad from './modules/home';
import menuLoad from './modules/menu';
import contactUsLoad from './modules/contactUs';

pageLoad();
contactUsLoad();



navEvents();

function navEvents() {
    const homeTab = document.getElementById('home');
    const menuTab = document.getElementById('menu');
    const contactUsTab = document.getElementById('contact-us');

    homeTab.addEventListener('click', homeLoad);
    menuTab.addEventListener('click', menuLoad);
    contactUsTab.addEventListener('click', contactUsLoad);


}