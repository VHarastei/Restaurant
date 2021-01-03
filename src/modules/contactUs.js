function contactUsLoad() {
    const content = document.getElementById('content');
    content.style.backgroundImage = "url('../dist/images/menu-background.jpg')";
    content.style.height = 100 + '%';

    const mainContent = document.querySelector('.main-content');
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild);
    }
    const contactUsPage = document.createElement('div');
    contactUsPage.classList.add('contact-us-page');

    const googleMap = document.createElement('div');
    googleMap.className = 'google-map';
    googleMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.6493839906116!2d-122.40582713612714!3d37.74210596942678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e540ad7e6b3%3A0xed5dd4c60edbeec2!2sDomino&#39;s%20Pizza!5e0!3m2!1sus!2sus!4v1609686379939!5m2!1sus!2sus" 
    width="600" 
    height="450" 
    frameborder="0" 
    style="border:0;" 
    allowfullscreen="" 
    aria-hidden="false" 
    tabindex="0"
    ></iframe>`;

    const container = document.createElement('div');
    container.style.height = 50 + 'px';

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    const h1 = document.createElement('h1');
    h1.innerText = 'Contact us';

    const mapInfo = document.createElement('div');
    mapInfo.innerHTML = `<i class="fas fa-map-marker-alt"></i> 320 Bayshore Blvd, San Francisco, CA 94124`;

    const timeInfo = document.createElement('div');
    timeInfo.innerHTML = `<i class="fas fa-clock"></i> Monday-Thursday: 8am-8pm, Friday-Sunday: 8am-11pm`;

    const phoneInfo = document.createElement('div');
    phoneInfo.innerHTML = `<i class="fas fa-phone-alt"></i> (123)-456 7890`;

    
    contactInfo.appendChild(mapInfo);
    contactInfo.appendChild(timeInfo);
    contactInfo.appendChild(phoneInfo);

    contactUsPage.appendChild(h1);
    contactUsPage.appendChild(contactInfo);
    contactUsPage.appendChild(googleMap);
    contactUsPage.appendChild(container);

    mainContent.appendChild(contactUsPage);
}

export default contactUsLoad;