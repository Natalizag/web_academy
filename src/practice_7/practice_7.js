import './practice_7.scss';


const containerBody = document.querySelector('body');
const containerHeader = document.querySelector('.header');

lampSwitcher(containerHeader, 1000, 150);
lampSwitcher(containerHeader, 300, 30);
lampSwitcher(containerHeader, 200, 100);
lampSwitcher(containerHeader);
lampSwitcher(containerHeader);
lampSwitcher();
lampSwitcher();
lampSwitcher(containerBody, 100, 80);

function lampSwitcher(
    rootElement = containerBody,
    speed = 500,
    size = 50,
) {
    const wrapper = document.createElement('div');
    const lamp = document.createElement('div');
    const button = document.createElement('button');

    wrapper.classList.add('lamp');
    lamp.classList.add('lamp__light');
    lamp.style.height = size + 'px';
    lamp.style.width = size + 'px';
    button.classList.add('lamp__button');
    button.textContent = 'toggle';

    wrapper.appendChild(lamp);
    wrapper.appendChild(button);
    rootElement.appendChild(wrapper);

    let intervalId;

    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomColor() {
        return (
            'rgb(' +
            randomValue(0, 255) +
            ',' +
            randomValue(0, 255) +
            ',' +
            randomValue(0, 255) +
            ')'
        );
    }

    function setColor() {
        lamp.style.background = getRandomColor();
    }

    function startInterval() {
        intervalId = setInterval(function () {
            setColor();
        }, speed);
    }

    function start() {
        setColor();
        startInterval();
    }

    function stop() {
        clearInterval(intervalId);
        lamp.style.background = '';
    }

    function toggle() {
        if (lamp.style.background === '') {
            start();
        } else {
            stop();
        }
    }

    button.onclick = toggle;
}


