
function on_success(position)
{
	document.getElementById("text").innerHTML=position.coords.latitude + " " + position.coords.longitude+" " + position.coords.accuracy+" " +position.coords.altitude+ " " +position.coords.speed;

	var mapString = "https://maps.googleapis.com/maps/api/staticmap?"+"center="+position.coords.latitude+","+position.coords.longitude+"&zoom=17"+"&size=400x400&maptype=satellite&key=AIzaSyA8dbQu5Ex6V4Jv9QgVl6ah4Vh8JuNdLW4";
	document.getElementById("map").setAttribute("src",mapString);

	}
	function on_error(err)
{
	document.getElementById("text").innerHTML=err.message;
	
}

var params = {
	enableHighAcurracy:true,
	timeout:1000,
	maximumAge:0
};

function get_geo_position()
{
	var geo=navigator.geolocation;
	geo.getCurrentPosition(on_success,on_error, params);
}
get_geo_position();