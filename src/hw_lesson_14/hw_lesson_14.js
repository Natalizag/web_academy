import './hw_lesson_14.scss';

const lamps = document.querySelectorAll('.block');

for (let i = 0; i < lamps.length; i++) {
    lampSwitcher(lamps[i]);
}

function lampSwitcher(rootElement) {
    let int;

    const button = rootElement.querySelector('.block__btn');
    const lamp = rootElement.querySelector('.block__circle');

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
}

// lampSwitcher(document.querySelector('#block1'));
// lampSwitcher(document.querySelector('#block2'));
// lampSwitcher(document.querySelector('#block3'));
// lampSwitcher(document.querySelector('#block4'));
// lampSwitcher(document.querySelector('#block5'));

// let int;

// const button = document.querySelector('.btn');
// const lamp = document.querySelector('.circle');

// function randomValue(max) {
//     return Math.floor(Math.random() * max);
// }

// function getRandomColor() {
//     return (
//         'rgb(' +
//         randomValue(255) +
//         ', ' +
//         randomValue(255) +
//         ', ' +
//         randomValue(255) +
//         ')'
//     );
// }

// function setColor() {
//     lamp.style.background = getRandomColor();
// }

// function start() {
//     clearInterval(int);
//     setColor();
//     int = setInterval(function () {
//         setColor();
//     }, 1000);
// }

// function stop() {
//     clearInterval(int);
//     lamp.style.background = '';
// }

// function toggle() {
//     if (lamp.style.background === '') {
//         start()
//     } else {
//         stop()
//     }
// }

// button.onclick = toggle;
