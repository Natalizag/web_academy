const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

function toggleRed() {
    const isEnabledRed = red.classList.contains('active');

    if (isEnabledRed === true) {
        red.classList.remove('active');
        red.textContent = 'Off';
    } else {
        red.classList.add('active');
        red.textContent = 'On';
    }
}

function toggleYellow() {
    const isEnabledYellow = yellow.classList.contains('active');

    if (isEnabledYellow === true) {
        yellow.classList.remove('active');
        yellow.textContent = 'Off';
    } else {
        yellow.classList.add('active');
        yellow.textContent = 'On';

    }
}

function toggleGreen() {
    const isEnabledGreen = green.classList.contains('active');

    if (isEnabledGreen === true) {
        green.classList.remove('active');
        green.textContent = 'Off';
    } else {
        green.classList.add('active');
        green.textContent = 'On';
    }
}

red.onclick = toggleRed;
yellow.onclick = toggleYellow;
green.onclick = toggleGreen;