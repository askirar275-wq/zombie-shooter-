// ===========================
// Blade Arena V2 - Game Engine
// ===========================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ===========================
// World
// ===========================

const WORLD = {
    width:5000,
    height:5000,
    grid:100
};

// ===========================
// Camera
// ===========================

const camera = {
    x:0,
    y:0
};

// ===========================
// Player
// ===========================

const player = {

    x:WORLD.width/2,
    y:WORLD.height/2,

    radius:20,

    speed:4,

    color:"#2196F3"

};

// ===========================
// Update Camera
// ===========================

function updateCamera(){

    camera.x = player.x - canvas.width/2;
    camera.y = player.y - canvas.height/2;

}

// ===========================
// Draw Ground
// ===========================

function drawGround(){

    ctx.fillStyle="#5fc45a";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="#70d36a";

    for(let x=0;x<=WORLD.width;x+=WORLD.grid){

        ctx.beginPath();

        ctx.moveTo(x-camera.x,-camera.y);

        ctx.lineTo(x-camera.x,WORLD.height-camera.y);

        ctx.stroke();

    }

    for(let y=0;y<=WORLD.height;y+=WORLD.grid){

        ctx.beginPath();

        ctx.moveTo(-camera.x,y-camera.y);

        ctx.lineTo(WORLD.width-camera.x,y-camera.y);

        ctx.stroke();

    }

}

// ===========================
// Draw Player
// ===========================

function drawPlayer(){

    ctx.beginPath();

    ctx.fillStyle=player.color;

    ctx.arc(

        player.x-camera.x,

        player.y-camera.y,

        player.radius,

        0,

        Math.PI*2

    );

    ctx.fill();

}

// ===========================
// Game Loop
// ===========================

function gameLoop(){

    if(typeof updatePlayer==="function"){

        updatePlayer();

    }

    updateCamera();

    drawGround();

    if(typeof drawGroundBlades==="function"){

        drawGroundBlades();

    }

    drawPlayer();

    if(typeof drawPlayerBlades==="function"){

        drawPlayerBlades();

    }

    if(typeof drawEnemies==="function"){

        drawEnemies();

    }

    if(typeof updateEnemies==="function"){

        updateEnemies();

    }

    if(typeof updateBlades==="function"){

        updateBlades();

    }

    requestAnimationFrame(gameLoop);

}

gameLoop();
