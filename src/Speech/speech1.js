window.addEventListener("touchstart",ontouchstart);
window.addEventListener("mousedown",ontouchstart);


var recog = new webkitSpeechRecognition();
recog.maxAlternatives = 5;
recog.lang='en-US';

var isOn =  false;

function ontouchstart(){
	if(!isOn){
    	recog.start();
    	isOn = true;
	}
}

function onEnd(){
	recog.stop();
	isOn = false;
}

recog.onend = onEnd;
recog.onsoundend = onEnd;

function onResults(e){
	var alternatives=e.results[0];
	for(var i =0;i<alternatives.length;i++)
	{
		document.getElementById("text").innerHTML+=alternatives[i].transcript+" "+ alternatives[i].confidence+ "<br>";
	}

}



recog.onresult = onResults;