import React from 'react';

import DescriptionCode from './DescriptionCode';
//store
import useStore from '../store/store';

import WeatherIcon from '../components/WeatherIcon';

export default function Temperature() {
	const descriptionCode = useStore((state) => state.weatherData.weatherDesCode);
	const temperature = useStore((state) => state.weatherData.temperature);
	const lowTemp = useStore((state) => state.weatherData.dayLowTemp);
	const highTemp = useStore((state) => state.weatherData.dayHighTemp);

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
							<span>
								<DescriptionCode desCode={descriptionCode} />
							</span>
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
