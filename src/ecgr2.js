function citeste()
{
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var c=document.getElementById("c").value;
	
	var coef=[a,b,c];
	return coef;
}

//----------------------------------------------------------------------
function calcul_delta(coeficienti)
{
	
	return coeficienti[1]*coeficienti[1]-4*coeficienti[0]*coeficienti[2];
}

//----------------------------------------------------------------------
function afiseaza(radacini){
if (radacini[3]>=0)
{
document.getElementById("x2").innerHTML =radacini[2].toString()+"+"+radacini[3].toString()+"i";;
}
else{
document.getElementById("x2").innerHTML =radacini[2].toString()+radacini[3].toString()+"i";	
}
if(radacini[1]>0){
	document.getElementById("x1").innerHTML =radacini[0].toString()+"+"+radacini[1].toString()+"i";
}
else{
document.getElementById("x1").innerHTML =radacini[0].toString()+"+"+radacini[1].toString()+"i";
}
}

//----------------------------------------------------------------------

function calcul_radacini(coef,delta){
var x1,x1_im,x2,x2_im;
if (delta==0)
	{
	x1=x2=(-coef[1]/(2*coef[0]));
	x1_im=x2_im=0;
	}
	else
	{
		if(delta>0)
		{
			x1=(-coef[1]+Math.sqrt(delta))/2*coef[0];
			x2=(-coef[1]-Math.sqrt(delta))/2*coef[0];
			x1_im=x2_im=0;
		}
		else
		{
		    x1=(-coef[1])/2*coef[0];
			x1_im=Math.sqrt(-delta)/2*coef[0];
			x2=(-coef[1])/2*coef[0];
			x2_im=-Math.sqrt(-delta)/2*coef[0];
			
		}
	}


return [x1, x1_im, x2, x2_im];
}

//----------------------------------------------------------------------

function rezolva()
{
	var coef=citeste();
	var delta = calcul_delta(coef);
	document.getElementById("delta").innerHTML =delta;
	var radacini=calcul_radacini(coef,delta);
	afiseaza(radacini);
	
}

//----------------------------------------------------------------------