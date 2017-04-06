window.addEventListener("deviceorientation", on_device_orientation);
function on_device_orientation(event)
{
document.getElementById("x").innerHTML = "Alpha = "+event.alpha;
document.getElementById("y").innerHTML = "Beta = "+event.beta;
document.getElementById("z").innerHTML = "Gama = "+event.gamma;

var canvas = document.getElementById("canvas");
var context= canvas.getContext("2d");
var raza = 20;
var centru = {x:canvas.width/2, y:canvas.height/2};
context.clearRect(0,0,canvas.width,canvas.height);

context.beginPath();
context.arc(centru.x+event.gamma*(canvas.width/2 -raza)/90,centru.y+event.beta*(canvas.height/2 -raza)/90,raza,0,2*Math.PI);
context.stroke();

}