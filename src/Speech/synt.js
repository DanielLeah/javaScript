

var synt = window.speechSynthesis;
function on_get_voices()
{
var p=document.getElementById("voci");
 var voices = synt.getVoices();
 for (var i = 0; i<voices.length;i++)
 {
	 p.innerHTML+=voices[i].name+":"+voices[i].lang+"<br>";
 }
}




function speek()
{
	var valoare=document.getElementById("text").value;
	var ut = new SpeechSynthesisUtterance();
	ut.rate=10;
	ut.text=valoare;
	synt.speak(ut);
}