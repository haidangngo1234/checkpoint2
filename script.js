
// let startTime;
// let elapsedTime = 0;
// let timerInterval;
// let running = false;

// function start() {
//     if (!running) {
//         startTime = Date.now() - elapsedTime;
//         timerInterval = setInterval(updateTime, 100);
//     }
// }

// function stop() {
//     if (running) {
//         clearInterval(timerInterval);
//         elapsedTime = Date.now() - startTime;
//         running = false;
//     }
// }

// function reset() {
//     clearInterval(timerInterval);
//     elapsedTime = 0;
//     document.getElementById('timeDisplay').textContent = "00:00.0";
//     running = false;
// }

// function updateTime() {
//     const now = Date.now();
//     const time = now - startTime + elapsedTime;
//     const minutes = Math.floor(time / 60000);
//     const seconds = Math.floor((time % 60000) / 1000);
//     const milliseconds = Math.floor((time % 1000) / 100);

//     document.getElementById('timeDisplay').textContent = 
//         `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${milliseconds}`;
// }


const stopwatches = [ 
    { element: document.getElementById('timeDisplay1'), startTime: 0, elapsedTime: 0, interval: null, running: false },
    { element: document.getElementById('timeDisplay2'), startTime: 0, elapsedTime: 0, interval: null, running: false }
];

function start(id) {
    const sw = stopwatches[id - 1];
    if (!sw.running) {
        sw.startTime = Date.now() - sw.elapsedTime;
        sw.interval = setInterval(() => updateTime(sw), 100);
        sw.running = true;
    }
}

function stop() {
    stopwatches.forEach(sw => {
        if (sw.running) {
            clearInterval(sw.interval);
            sw.elapsedTime = Date.now() - sw.startTime;
            sw.running = false;
        }
    });
}

function reset(id) {
    const sw = stopwatches[id - 1];
    clearInterval(sw.i);
    sw.elapsedTime = 0;
    sw.element.textContent = "00:00.0";
    sw.running = false;
}

function updateTime(sw) {
    const time = Date.now() - sw.startTime + sw.elapsedTime;
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 100);
    sw.element.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${milliseconds}`;
}