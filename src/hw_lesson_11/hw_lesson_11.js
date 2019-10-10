import './hw_lesson_11.scss';
import './colorSwitcher.js';
import './lamp.js';

/*class State {
    constructor(name, dur, next) {
        this.name = name;
        this.dur = dur;
        this.next = next;
    }
}

class Constroller {
    trigger(state, callback) {
        callback(state);
        setTimeout(() => {
            this.trigger(state.next, callback);
        }, state.dur * 1000)
    }
}


var app = new Vue({
    el: '#traffic-light',
    data: {
        current: 'red'
    },
    mounted() {
        var constroller = new Constroller();

        var red = new State('red', 2);
        var yellowR = new State('yellow', 1);
        var yellowG = new State('yellow', 1);
        var green = new State('green', 3);

        red.next = yellowR;
        yellowR.next = green;
        green.next = yellowG;
        yellowG.next = red;

        constroller.trigger(red, (state) => {
            this.current = state.name;
        });

    }
})*/