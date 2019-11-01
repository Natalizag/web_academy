function clock(
    rootElement = document.querySelector('body'),
    startState = 'FULL',
) {
    let clockElement;
    let hourseElement;
    let minElement;
    let secElement;
    let state = startState;
    let dayElement;
    let monthElement;
    let yearElement;

    function renderContainer() {
        clockElement = document.createElement('button');
        clockElement.id = 'ID' + Date.now() + '' + Math.floor(Math.random() * 1000);
        clockElement.classList.add('clock');
        const stopEventButton = document.createElement('button');
        stopEventButton.innerText = 'DELETE EVENT LISTENER';

        function clickHandler(e) {
            switchState();
            initContent();
        }

        clockElement.addEventListener('click', clickHandler);
        clockElement.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            initContentDate();
            console.log('HELLO', e);
        });
        stopEventButton.addEventListener('click', function () {
            clockElement.removeEventListener('click', clickHandler);
        });
        rootElement.appendChild(clockElement);
        rootElement.appendChild(stopEventButton);
    }

    function normalisedDate(num) {
        return num < 10 ? '0' + num : num;
    }

    function setTime() {
        const currentDate = new Date();

        hourseElement.textContent = normalisedDate(currentDate.getHours());
        minElement.textContent = normalisedDate(currentDate.getMinutes());

        if (secElement) {
            secElement.textContent = normalisedDate(currentDate.getSeconds());
        }
    }

    function setDate() {
        const currentDate = new Date();

        dayElement.textContent = normalisedDate(currentDate.getDate());
        monthElement.textContent = normalisedDate(currentDate.getMonth() + 1);
        yearElement.textContent = currentDate.getFullYear();
    }

    function renderContent() {
        clockElement.innerHTML = '';

        hourseElement = document.createElement('div');
        minElement = document.createElement('div');

        hourseElement.classList.add('clock__hourse');
        minElement.classList.add('clock__min');

        clockElement.appendChild(hourseElement);
        clockElement.appendChild(minElement);

        if (state === 'FULL') {
            secElement = document.createElement('div');
            secElement.classList.add('clock__sec');
            clockElement.appendChild(secElement);
        }
    }

    function renderContentDate() {
        clockElement.innerHTML = '';

        dayElement = document.createElement('div');
        monthElement = document.createElement('div');
        yearElement = document.createElement('div');

        dayElement.classList.add('clock__day');
        monthElement.classList.add('clock__month');
        yearElement.classList.add('clock__year');

        clockElement.appendChild(dayElement);
        clockElement.appendChild(monthElement);
        clockElement.appendChild(yearElement);
    }

    function switchState() {
        if (state === 'FULL') {
            state = 'SHORT';
        } else {
            state = 'FULL';
        }
    }

    function initContent() {
        renderContent();
        setTime();
    }

    function initContentDate() {
        renderContentDate();
        setDate();
    }

    renderContainer();
    initContent();
}

export { clock }; //