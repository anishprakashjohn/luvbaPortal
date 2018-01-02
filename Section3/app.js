
const yargs = require('yargs');

const geocode = require('./geocode.js');
const climate=require('./climate.js');

const argv = yargs
	.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		json: true
		}
	})
	.help()
	.alias('help','h')
	.argv;
	
geocode.getGeocode(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	}
	else{
		
		climate.getClimate(results, (errorMessage_climate, weatherResults)=>{
			if(errorMessage_climate){
				console.log(errorMessage_climate);
			}
			else{
				var temp_curr = (weatherResults.temperature-32)*5/9;
				var real_curr = (weatherResults.realfeel-32)*5/9;
				console.log(`Current Temperature: ${temp_curr}`);
				console.log(`Real feel: ${real_curr}`)
			}
			
		});
	}
	
} );


	
	
