const axios = require('axios');

const getLugarLatLng = async( direccion ) => {

	const encodedUrl = encodeURI(direccion);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
		headers: {'x-rapidapi-key': 'dab79d2d8amsha8ce3b34738d79cp1df52fjsncdb7c57d4815'}
  	});

	const resp = await instance.get();
	  
	if (resp.data.Results.length === 0) {
		throw new Error(`No hay resultados para ${ direccion }`);
	}

	const data = resp.data.Results[0];
	const dir = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		dir,
		lat,
		lng
	};

};

module.exports = {
	getLugarLatLng
}
