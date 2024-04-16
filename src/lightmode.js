export {createLightModeBtn};

const root = document.querySelector(':root');
const logoContainer = document.querySelector('.logoContainer');
const lightMode = document.createElement('img');

logoContainer.appendChild(lightMode);


function createLightModeBtn() {
    if (root.style.colorScheme === 'light') {
        document.body.setAttribute('class', 'light');
        return
    }
    document.body.setAttribute('class', 'dark');
    lightMode.addEventListener('click', changeLight);
}


function changeLight() {
    if (root.style.colorScheme === 'light') {
        document.body.setAttribute('class', 'dark');
        root.style.colorScheme = 'dark';
        return
    }
    document.body.setAttribute('class', 'light');
    root.style.colorScheme = 'light';
}