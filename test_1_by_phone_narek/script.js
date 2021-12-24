var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var is_mouse = false;

window.onmousedown = (e) => {
    document.body.innerHTML = `${e}`;
    ctx.beginPath();
    // ctx.moveTo()
    is_mouse = true;
}

window.onmouseup = (e) => {is_mouse = false;}

window.onmousemove = (e) => {
    // ctx.lineTo();
}