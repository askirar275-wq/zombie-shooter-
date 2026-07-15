const player = document.getElementById("player");

let playerX = window.innerWidth / 2 - 25;
const playerY = window.innerHeight - 140;

player.style.left = playerX + "px";
player.style.top = playerY + "px";

const speed = 12;

function updatePlayer() {
    player.style.left = playerX + "px";
}

document.getElementById("moveLeft").addEventListener("touchstart", () => {
    moveLeft = true;
});

document.getElementById("moveLeft").addEventListener("touchend", () => {
    moveLeft = false;
});

document.getElementById("moveRight").addEventListener("touchstart", () => {
    moveRight = true;
});

document.getElementById("moveRight").addEventListener("touchend", () => {
    moveRight = false;
});

document.getElementById("moveLeft").addEventListener("mousedown", () => {
    moveLeft = true;
});

document.getElementById("moveLeft").addEventListener("mouseup", () => {
    moveLeft = false;
});

document.getElementById("moveRight").addEventListener("mousedown", () => {
    moveRight = true;
});

document.getElementById("moveRight").addEventListener("mouseup", () => {
    moveRight = false;
});

let moveLeft = false;
let moveRight = false;

function playerLoop() {

    if (moveLeft) {
        playerX -= speed;
    }

    if (moveRight) {
        playerX += speed;
    }

    if (playerX < 0) playerX = 0;

    if (playerX > window.innerWidth - 50)
        playerX = window.innerWidth - 50;

    updatePlayer();

    requestAnimationFrame(playerLoop);
}

playerLoop();
