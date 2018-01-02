const request = require('request');

var getClimate = (geolocation, callback) => {
	
	request({
		uri: `https://api.darksky.net/forecast/e51ee93bf283c4ace50bd5c7babb0f11/${geolocation.latitude},${geolocation.longtitude}`,
		json: true
	},(error,response,body) =>{
		if(error){
			callback ('Unable to cfetch climate information');
		}
		else{
			
			 callback (undefined, {
				temperature: body.currently.temperature,
				realfeel: body.currently.apparentTemperature
			});
		}
		
		
	});
}

module.exports = {
	getClimate
}