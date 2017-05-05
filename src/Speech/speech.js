document.addEventListener("touchstart",on_touch);
document.addEventListener("mousedown",on_touch);


var recognition = new webkitSpeechRecognition();

function on_touch()
{
	recognition.start();
	
}

function on_end()
{
	
		recognition.stop();
	
}

recognition.onend =on_end();
recognition.onsoundend=on_end();
recognition.onspeechend=on_end();
recognition.onresult=function (e)
{
	
	document.getElementById("text").innerHTML=e.result[0][0].transcript+":"+e.result[0][0].confidance;
	
}