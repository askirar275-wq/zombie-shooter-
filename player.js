// ===========================
// Player Controls
// ===========================

let moveX = 0;
let moveY = 0;

// Keyboard
window.addEventListener("keydown",(e)=>{

    switch(e.key.toLowerCase()){

        case "w":
        case "arrowup":
            moveY=-1;
            break;

        case "s":
        case "arrowdown":
            moveY=1;
            break;

        case "a":
        case "arrowleft":
            moveX=-1;
            break;

        case "d":
        case "arrowright":
            moveX=1;
            break;

    }

});

window.addEventListener("keyup",(e)=>{

    switch(e.key.toLowerCase()){

        case "w":
        case "arrowup":
        case "s":
        case "arrowdown":
            moveY=0;
            break;

        case "a":
        case "arrowleft":
        case "d":
        case "arrowright":
            moveX=0;
            break;

    }

});

// ===========================
// Mobile Joystick
// ===========================

const joystick=document.getElementById("joystick");
const stick=document.getElementById("stick");

joystick.addEventListener("touchmove",(e)=>{

    e.preventDefault();

    const rect=joystick.getBoundingClientRect();

    let x=e.touches[0].clientX-rect.left-70;
    let y=e.touches[0].clientY-rect.top-70;

    const dis=Math.sqrt(x*x+y*y);

    if(dis>45){

        x=x/dis*45;
        y=y/dis*45;

    }

    stick.style.left=(40+x)+"px";
    stick.style.top=(40+y)+"px";

    moveX=x/45;
    moveY=y/45;

},{passive:false});

joystick.addEventListener("touchend",()=>{

    moveX=0;
    moveY=0;

    stick.style.left="40px";
    stick.style.top="40px";

});

// ===========================
// Update Player
// ===========================

function updatePlayer(){

    player.x+=moveX*player.speed;
    player.y+=moveY*player.speed;

    player.x=Math.max(player.radius,
        Math.min(WORLD.width-player.radius,player.x));

    player.y=Math.max(player.radius,
        Math.min(WORLD.height-player.radius,player.y));

                        }
