import './hw_lesson_14.scss';

let int;

const button = document.querySelector('.btn');
const lamp = document.querySelector('.circle');

function randomValue(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    return (
        'rgb(' +
        randomValue(255) +
        ', ' +
        randomValue(255) +
        ', ' +
        randomValue(255) +
        ')'
    );
}

function setColor() {
    lamp.style.background = getRandomColor();
}

function start() {
    clearInterval(int);
    setColor();
    int = setInterval(function () {
        setColor();
    }, 1000);
}

function stop() {
    clearInterval(int);
    lamp.style.background = '';
}

function toggle() {
    if (lamp.style.background === '') {
        start()
    } else {
        stop()
    }
}

button.onclick = toggle;
