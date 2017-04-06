window.addEventListener("deviceorientation", on_device_orientation);
function on_device_orientation(event)
{
document.getElementById("x").innerHTML = "Alpha = "+event.alpha;
document.getElementById("y").innerHTML = "Beta = "+event.beta;
document.getElementById("z").innerHTML = "Gama = "+event.gamma;
}