const axios = require('axios');

const argv = require('yargs').options({
	direccion:{
		alias:'d',
		desc:'Dirección de la ciudad para obtener el clima',
		demand:true
	}
}).argv;

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${argv.direccion}&appid=ced65438620565f1a1e248f4365fe357`)
	.then((response)=>{

		let result = response.data;
		console.log("result", result);

		console.log(`========== INFORMACIÓN SOBRE: ${argv.direccion} ==========`);
		console.log(`========== id: ${result.id}`);
		console.log(`========== LLUVIA: ${result.weather[0].main}`);
		console.log(`========== TIPO DE LLUVIA: ${result.weather[0].description}`);
		console.log(`========== VIENTO: ${result.wind.speed}`);
		console.log(`========== TEMPERATURA: ${result.main.temp}`);
		console.log(`========== LATITUD: ${result.coord.lat}`);
		console.log(`========== LONGITUD: ${result.coord.lon}`);
		

	})
	.catch((error)=>{
		console.log(`\n========================= ERROR =============================`);
		console.log(`El lugar: ${argv.direccion} no existe, vuelva a intentarlo`);
		console.log(`=============================================================`);
	});