window.addEventListener("touchstart",on_touch_start);
window.addEventListener("touchmove", on_touch_move);
var touch_colors= ["#FF0000", "00FF00", "0000FF","0F0F00"];
var touch_id =[];
function on_touch_start(evt)
{
	var touches = evt.changedTouches;	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	for(var i =0;i<touches.length;i++)
	{
		
			touch_id.push({id:touches[i].identifier,color:touch_colors[i],lastX:touches[i].pageX,lastY:touches[i].pageY});
			context.beginPath();
			context.strokeStyle=touch_id.color;
			context.arc(touches[i].pageX,touches[i].pageY, 20, 0, 2*Math.PI);
			context.stroke();
	}	
}
function on_touch_move(evt)
{
	var touches = evt.changedTouches;
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	for(var i =0;i<touches.length;i++)
	{
		var color="#FFFFF";
		var lastX=0;
		var lastY=0;
		var j;
			for (var j=0; j<touch_id.length;j++)
				if(touches[i].identifier == touch_id[j].id)
				{
					color=touch_id[j].color;
					lastX=touch_id[j].lastX;
					lastY=touch_id[j].lastY;
					break;
				}
			context.beginPath();
			context.moveTo(lastX,lastY);
			context.lineWidth=20;
			context.lineTo(touches[i].pageX,touches[i].pageY);
			context.arc(touches[i].pageX,touches[i].pageY, 20, 0, 2*Math.PI);
			touch_id[i].lastX=touches[i].pageX;
			touch_id[i].lastY=touches[i].pageY;
			context.strokeStyle=color;
			
			context.stroke();
	}
	
}
