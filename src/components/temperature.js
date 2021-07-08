import React from 'react';
//store
import useWeatherStore from '../store/weatherStore';

import WeatherIcon from '../components/WeatherIcon';

export default function Temperature() {
	const descriptionCode = useWeatherStore((state) => state.weatherData.weatherDesCode);
	const temperature = useWeatherStore((state) => state.weatherData.temperature);
	const lowTemp = useWeatherStore((state) => state.weatherData.dayLowTemp);
	const highTemp = useWeatherStore((state) => state.weatherData.dayHighTemp);

	return (
		<>
			<div className='mb-6 w-full pl-2'>
				<div className='flex items-center w-full justify-evenly'>
					<div className='flex flex-col items-center'>
						<div className='relative font-normal text-[42px] flex translate-y-3'>
							<span className='text-[80px]'>{Math.round(temperature)}</span>
							<span className='relative text-[40px] self-start top-2 block'>°</span>
						</div>
						<div className='flex items-center'>
							<span>Cloudy</span>
							<div className='flex ml-2 text-sm font-thin'>
								<div className='font-light'>{Math.round(highTemp)}</div>
								<div className='font-light'>°</div>
								<div>&nbsp;/&nbsp;</div>
								<div>{Math.round(lowTemp)}</div>
								<div>°</div>
							</div>
						</div>
					</div>
					<div className='ml-2 w-28 h-28'>
						<WeatherIcon descriptionCode={descriptionCode} moment='day' />
					</div>
				</div>
			</div>
		</>
	);
}
