const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

/*function toggleRed() {
    const isEnabledRed = red.classList.contains('active');

    if (isEnabledRed === true) {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    } else {
        red.classList.add('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'On';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    }
}

function toggleYellow() {
    const isEnabledYellow = yellow.classList.contains('active');

    if (isEnabledYellow === true) {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    } else {
        yellow.classList.add('active');
        red.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        green.textContent = 'Off';
        yellow.textContent = 'On';
    }
}

function toggleGreen() {
    const isEnabledGreen = green.classList.contains('active');

    if (isEnabledGreen === true) {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'Off';
    } else {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.add('active');
        red.textContent = 'Off';
        yellow.textContent = 'Off';
        green.textContent = 'On';
    }
}

red.onclick = toggleRed;
yellow.onclick = toggleYellow;
green.onclick = toggleGreen;*/

function toggleOnRed() {
    red.classList.add('active');
    red.textContent = 'on';
}

function toggleOnYellow() {
    yellow.classList.add('active');
    yellow.textContent = 'on';
}

function toggleOnGreen() {
    green.classList.add('active');
    green.textContent = 'on';
}

function toggleOfAll() {
    red.classList.remove('active');
    yellow.classList.remove('active');
    green.classList.remove('active');
    red.textContent = 'off';
    yellow.textContent = 'off';
    green.textContent = 'off';
}

red.onclick = () => {
    toggleOfAll();
    toggleOnRed();
}

yellow.onclick = () => {
    toggleOfAll();
    toggleOnYellow();
}

green.onclick = () => {
    toggleOfAll();
    toggleOnGreen();
}

