function citeste()
{
	var _a=document.getElementById("a").value;
	var _b=document.getElementById("b").value;
	var _c=document.getElementById("c").value;
	
	var coef={a:_a,b:_b,c:_c};
	return coef;
}

//----------------------------------------------------------------------
function calcul_delta(coeficienti)
{
	
	return coeficienti.b*coeficienti.b-4*coeficienti.a*coeficienti.c;
}

//----------------------------------------------------------------------
function afiseaza(radacini){
if (radacini.sol2.im>=0)
{
document.getElementById("x2").innerHTML =radacini.sol2.re.toString()+"+"+radacini.sol2.im.toString()+"i";;
}
else{
document.getElementById("x2").innerHTML =radacini.sol2.re.toString()+radacini.sol2.im.toString()+"i";	
}
if(radacini.sol1.im>0){
	document.getElementById("x1").innerHTML =radacini.sol1.re.toString()+"+"+radacini.sol1.im.toString()+"i";
}
else{
document.getElementById("x1").innerHTML =radacini.sol1.re.toString()+"+"+radacini.sol1.im.toString()+"i";
}
}

//----------------------------------------------------------------------

function calcul_radacini(coef,delta){
var x1,x2;
if (delta==0)
	{
	x1={re:-coef.b/(2*coef.a), im:0}
	x2={re:-coef.b/(2*coef.a), im:0}
	}
	else
	{
		if(delta>0)
		{
			x1={re:(-coef.b+Math.sqrt(delta))/2*coef.a, im:0}
			x2={re:(-coef.b-Math.sqrt(delta))/2*coef.a, im:0}
		}
		else
		{
			x1={re:(-coef.b)/2*coef.a, im:Math.sqrt(-delta)/2*coef.a}
			x2={re:(-coef.b)/2*coef.a, im: -Math.sqrt(-delta)/2*coef.a}	
		}
	}

var sol={sol1:x1, sol2:x2};
return sol;
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