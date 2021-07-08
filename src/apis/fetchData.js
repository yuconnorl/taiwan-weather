import key from '../secure/keys';
const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/';
const location = '臺北市';
const initialDate = '2021-07-08';
const endDate = '2021-07-12';

//fetch Wx, pop
const fetchWeatherForecast = () => {
	let url = baseURL + `F-C0032-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北市`;
	const weatherForecastData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	// weatherForecastData().then((data) => setForecastData(data));
	return weatherForecastData().then((data) => {
		return data.records.location[0].weatherElement.reduce((acc, item) => {
			if (['Wx', 'PoP'].includes(item.elementName)) {
				acc[item.elementName] = item.time[0].parameter;
			}
			return acc;
		}, {});
	});
};
//fetch current weather
const fetchCurrentWeather = () => {
	let url = baseURL + `O-A0003-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北`;
	const currentWeatherData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	return currentWeatherData().then((data) => {
		const weatherData = data.records.location[0].weatherElement.reduce((acc, item) => {
			if (['WDSD', 'TEMP', 'HUMD', 'H_UVI', 'D_TX', 'D_TN'].includes(item.elementName)) {
				acc[item.elementName] = item.elementValue;
			}
			return acc;
		}, {});
		let obsTime = data.records.location[0].time.obsTime;
		return { ...weatherData, obsTime };
	});
};
//fetch week forecast
const fetchWeekForecast = () => {
	const url =
		baseURL +
		`F-D0047-091?
Authorization=${key.AUTHORIZATION_KEY}&
locationName=${location}&
elementName=T,Wx&timeFrom=${initialDate}T00%3A00%3A00&timeTo=${endDate}T24%3A00%3A00`;
	const weekForecastData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	return weekForecastData().then((data) => {
		let temp = Object.values(data.records.locations[0].location[0].weatherElement[0].time);
		let wx = Object.values(data.records.locations[0].location[0].weatherElement[1].time);
		const tempFilter = [];
		const wxFilter = [];
		const tempResult = [];
		const wxResult = [];
		// let iteration = temp.keys();
		for (const iter of temp.keys()) {
			if (iter % 2 === 0) {
				tempFilter.push(temp[iter]);
				wxFilter.push(wx[iter]);
			}
		}
		for (const i of tempFilter) {
			tempResult.push(i.elementValue[0].value);
		}
		for (const i of wxFilter) {
			wxResult.push(i.elementValue[1].value);
		}
		return [tempResult, wxResult];
	});
};

export { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast };
