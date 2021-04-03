
export function helloInRhythm() {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Welcome to Snowpack!';
    h1.classList.add('title');
    makeConfetti();
}

async function makeConfetti() {
    const confetti = await import (/* webpackIgnore: true */ 'https://cdn.skypack.dev/canvas-confetti');

    confetti.create(document.getElementById('canvas'), {
        resize: true,
        useWorker: true,
    })({ particleCount: 200, spread: 200 });
}

