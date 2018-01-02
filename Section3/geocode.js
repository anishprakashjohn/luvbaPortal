const request = require('request');

var getGeocode = (address, callback ) =>{
	var encodeAddress = encodeURIComponent(address);
	console.log('Address', encodeAddress);
	
	request ({
		uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyA_IQhhnih6pJm-gzkIhrQP6mwnxBrRsYQ`,
		json: true
	}, (error,response, body) =>{
		if(error){
			callback ('Unable to connect to google server');
		}
		else if (body.status === 'ZERO_RESULTS'){
			
			callback ('Unable to find that address.. ');
		}
		else if (body.status === 'OK'){
			callback(undefined, {
				     address: body.results[0].formatted_address,
					 latitude: body.results[0].geometry.location.lat,
					 longtitude: body.results[0].geometry.location.lng
				});
			
		}
		
	});
	
}

module.exports = {
	getGeocode
}