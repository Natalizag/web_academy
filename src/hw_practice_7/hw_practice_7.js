import './hw_practice_7.scss';

const containerBody = document.querySelector('body');

clock();
clock();
clock();
clock();
clock();


function clock(
    rootElement = containerBody,
    size = 200,
    currentTime = '',

) {
    const wrapper = document.createElement('div');
    const block = document.createElement('div');

    wrapper.classList.add('block');
    block.classList.add('block__time');
    block.style.height = size / 2 + 'px';
    block.style.width = size + 'px';

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
        currentTime = hours + ":" + minutes + ":" + seconds;

        block.textContent = currentTime;
    }

    setInterval(digitalWatch, 1000);

    digitalWatch();
}

/*const containerBody = document.querySelector('body');
let textHours;
let textMinutes;
let textSeconds;

clock();
clock(containerBody, 90, textHours);
clock();
clock(containerBody, 90, textMinutes);
clock();

function clock(
    rootElement = containerBody,
    size = 100,
    currentTime = textHours,

) {
    const wrapper = document.createElement('div');
    const block = document.createElement('div');

    wrapper.classList.add('block');
    block.classList.add('block__time');
    block.style.height = size / 2 + 'px';
    block.style.width = size + 'px';
    block.textContent = currentTime;

    wrapper.appendChild(block)

    rootElement.appendChild(wrapper);

    function digitalWatchHour() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        currentTime = hours + ":";

        block.textContent = currentTime;

        return currentTime;

    }

    function digitalWatchMitutes() {
        let date = new Date();
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;

        currentTime = minutes + ":";

        block.textContent = currentTime;

        return currentTime;
    }

    function digitalWatchSeconds() {
        let date = new Date();
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = "0" + seconds;

        currentTime = seconds;

        block.textContent = currentTime;

        return currentTime;
    }

    setInterval(digitalWatchHour, 1000);
    setInterval(digitalWatchMitutes, 1000);
    setInterval(digitalWatchSeconds, 1000);


    textHours = digitalWatchHour();
    textMinutes = digitalWatchMitutes();
    textSeconds = digitalWatchSeconds();
}

clock(containerBody, 100, textHours);
clock(containerBody, 120, textMinutes);
clock(containerBody, 140, textSeconds);*/


