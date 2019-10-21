import './hw_practice_7.scss';

const containerBody = document.querySelector('body');

clock();
clock(containerBody, 50, ':');
clock();
clock(containerBody, 50, ':');
clock();

function clock(
    rootElement = containerBody,
    size = 100,
    text = 'timer',

) {
    const wrapper = document.createElement('div');
    const block = document.createElement('div');

    wrapper.classList.add('block');
    block.classList.add('block__time');
    block.style.height = size + 'px';
    block.style.width = size + 'px';
    block.textContent = text;

    wrapper.appendChild(block)

    rootElement.appendChild(wrapper);

    let textHours;
    let textMinutes;
    let textSeconds;
    let intervalId;

    function digitalWatch() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        textHours = hours + ":";
        textMinutes = minutes + ":" + seconds;
        textSeconds = seconds;
        text = hours + ":" + minutes + ":" + seconds;

        block.textContent = text;


    }

    setInterval(digitalWatch, 1000);

    /*intervalId = setInterval(function () {
        digitalWatch();
    }, 1000);*/

    digitalWatch();
}

clock(containerBody, 100);
clock(containerBody, 120);
clock(containerBody, 140);


