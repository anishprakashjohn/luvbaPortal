
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
		console.log(JSON.stringify(results,undefined, 2));
		climate.getClimate(results, (errorMessage_climate, results_climate)=>{
			if(errorMessage_climate){
				console.log(errorMessage_climate);
			}
			else{
				console.log(JSON.stringify(results_climate,undefined, 2));
			}
			
		});
	}
	
} );


	
	
