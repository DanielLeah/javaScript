window.addEventListener("deviceorientation", on_device_orientation);
var imd=document.getElementById("img");

function on_device_orientation(event)
{
document.getElementById("x").innerHTML = "Alpha = "+event.alpha;
document.getElementById("y").innerHTML = "Beta = "+event.beta;
document.getElementById("z").innerHTML = "Gama = "+event.gamma;


var canvas = document.getElementById("canvas");
var context= canvas.getContext("2d");
var centru = {x:canvas.width/2, y:canvas.height/2};
context.setTransform(1,0,0,1,0,0);
context.clearRect(0,0,canvas.width,canvas.height);
var latura_patrat= 50;


context.translate(centru.x/2, centru.y/2);
context.rotate(event.alpha*Math.PI/180);


context.beginPath();
context.drawImage(img,-latura_patrat/2+event.gamma*(canvas.width/2 -latura_patrat*0.71)/90, -latura_patrat/2+event.beta*(canvas.height/2 -latura_patrat*0.71)/90);
context.stroke();

}