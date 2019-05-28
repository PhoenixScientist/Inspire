import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	debugger
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	document.getElementById('weather').innerHTML = _weatherService.Weather.weaTemplate
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
