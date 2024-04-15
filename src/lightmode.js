export {createLightModeBtn};

const root = document.querySelector(':root');
const lightMode = document.querySelector('.switchLightMode');
const lightBtn = document.createElement('button');

function createLightModeBtn() {
    lightMode.appendChild(lightBtn);
    lightBtn.textContent = 'Light mode';
    lightBtn.addEventListener('click', changeLight);
}


function changeLight() {
    if (root.style.colorScheme === 'light') {
        root.style.colorScheme = 'dark';
        return
    }
    root.style.colorScheme = 'light';
}