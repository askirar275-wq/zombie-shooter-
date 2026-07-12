// ===== Player Movement =====

let moveX = 0;
let moveY = 0;

// Keyboard Support
window.addEventListener("keydown", e => {

    switch(e.key.toLowerCase()){

        case "w":
        case "arrowup":
            moveY = -1;
            break;

        case "s":
        case "arrowdown":
            moveY = 1;
            break;

        case "a":
        case "arrowleft":
            moveX = -1;
            break;

        case "d":
        case "arrowright":
            moveX = 1;
            break;

    }

});

window.addEventListener("keyup", e => {

    switch(e.key.toLowerCase()){

        case "w":
        case "arrowup":
        case "s":
        case "arrowdown":
            moveY = 0;
            break;

        case "a":
        case "arrowleft":
        case "d":
        case "arrowright":
            moveX = 0;
            break;

    }

});

// ===== Mobile Joystick =====

const joy = document.getElementById("joystick");
const stick = document.getElementById("stick");

joy.addEventListener("touchmove", e=>{

    e.preventDefault();

    const rect = joy.getBoundingClientRect();

    let x = e.touches[0].clientX - rect.left - 70;
    let y = e.touches[0].clientY - rect.top - 70;

    const dis = Math.sqrt(x*x+y*y);

    if(dis>45){

        x = x/dis*45;
        y = y/dis*45;

    }

    stick.style.left = (40+x)+"px";
    stick.style.top  = (40+y)+"px";

    moveX = x/45;
    moveY = y/45;

},{passive:false});

joy.addEventListener("touchend",()=>{

    moveX = 0;
    moveY = 0;

    stick.style.left="40px";
    stick.style.top="40px";

});

// ===== Player Blades =====

const playerBlades = [];

// ===== Update Player =====

function updatePlayer(){

    player.x += moveX * player.speed;
    player.y += moveY * player.speed;

    player.x = Math.max(player.radius,Math.min(world.width-player.radius,player.x));
    player.y = Math.max(player.radius,Math.min(world.height-player.radius,player.y));

}

// ===== Collect Blades =====

function updateBlades(){

    blades.forEach(b=>{

        if(b.taken) return;

        const dx = player.x-b.x;
        const dy = player.y-b.y;

        if(Math.sqrt(dx*dx+dy*dy)<35){

            b.taken=true;

            playerBlades.push({
                angle:Math.random()*Math.PI*2
            });

            document.getElementById("bladeCount").textContent =
            playerBlades.length;

        }

    });

}

// ===== Draw Player Blades =====

function drawPlayerBlades(){

    playerBlades.forEach((blade,index)=>{

        blade.angle += 0.05;

        const r = 55 + index*4;

        const bx = player.x + Math.cos(blade.angle)*r;
        const by = player.y + Math.sin(blade.angle)*r;

        ctx.save();

        ctx.translate(
            bx-camera.x,
            by-camera.y
        );

        ctx.rotate(blade.angle);

        ctx.fillStyle="white";
        ctx.fillRect(-2,-14,4,28);

        ctx.fillStyle="#8b5a2b";
        ctx.fillRect(-5,8,10,4);

        ctx.restore();

    });

                     }
