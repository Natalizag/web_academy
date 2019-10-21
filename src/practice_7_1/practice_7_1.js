import './practice_7_1.scss';

const lamps = document.querySelectorAll('.lamp');

for (let i = 0; i < lamps.length; i++) {
    lampSwitcher(lamps[i]);
}

lampSwitcher(document.querySelector('#lamp1'));
lampSwitcher(document.querySelector('#lamp2'));
lampSwitcher(document.querySelector('#lamp3'));
lampSwitcher(document.querySelector('#lamp4'));

function lampSwitcher(rootElement) {
    const lamp = rootElement.querySelector('.lamp__light');
    const button = rootElement.querySelector('.lamp__button');

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
        }, 1500);
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