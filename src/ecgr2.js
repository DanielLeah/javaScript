function rezolva()
{
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var c=document.getElementById("c").value;
	var delta = (b*b) - (4*a*c);
	document.getElementById("delta").innerHTML =delta;
	var x1,x2, x1_im,x2_im;
	if (delta==0)
	{
	x1=x2=(-b/(2*a));
	document.getElementById("x1").innerHTML =x1;
	document.getElementById("x2").innerHTML =x2;
	}
	else
	{
		if(delta>0)
		{
			x1=(-b+Math.sqrt(delta))/2*a;
			x2=(-b-Math.sqrt(delta))/2*a;
			document.getElementById("x1").innerHTML =x1;
			document.getElementById("x2").innerHTML =x2;
		}
		else
		{
		    x1=(-b)/2*a;
			x1_im=Math.sqrt(-delta)/2*a;
			x2=(-b)/2*a;
			x2_im=-Math.sqrt(-delta)/2*a;
			document.getElementById("x1").innerHTML =x1.toString()+"+"+x1_im.toString()+"i";
			document.getElementById("x2").innerHTML =x2.toString()+x2_im.toString()+"i";;
		}
	}
}

