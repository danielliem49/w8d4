import FlappyBird from './game';
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('bird-game');
    new FlappyBird(canvas);
})

