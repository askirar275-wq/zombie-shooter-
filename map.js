// ===== MAP OBJECTS =====

// Coins
const coins = [];

for (let i = 0; i < 50; i++) {
    coins.push({
        x: Math.random() * world.width,
        y: Math.random() * world.height,
        taken: false
    });
}

// Buildings
const buildings = [
    {
        name: "Tea Shop",
        x: teaShop.x,
        y: teaShop.y,
        w: 90,
        h: 90
    }
];

// Draw Coins
function drawCoins() {

    ctx.fillStyle = "gold";

    coins.forEach(c => {

        if (c.taken) return;

        ctx.beginPath();
        ctx.arc(
            c.x - camera.x,
            c.y - camera.y,
            10,
            0,
            Math.PI * 2
        );
        ctx.fill();

    });

}

// Collect Coins
function collectCoins() {

    coins.forEach(c => {

        if (c.taken) return;

        const dx = player.x - c.x;
        const dy = player.y - c.y;

        if (Math.sqrt(dx * dx + dy * dy) < 30) {

            c.taken = true;

            let money = Number(document.getElementById("coins").textContent);
            money += 10;
            document.getElementById("coins").textContent = money;

        }

    });

}
