import React, { useState, useEffect } from 'react';

import DarkorBright from './darkorBright';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as DayCloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as LoadingIcon } from './images/loading.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';

function App() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		let root = document.getElementsByTagName('html')[0];
		root.classList.toggle('dark');
	}, [dark]);

	return (
		<>
			<div className='bg-[#ededed] h-full flex items-center justify-center dark:bg-gray-700'>
				<div className='weather-card relative min-w-[360px] bg-[#f9f9f9] opacity-40  box-border py-[30px] px-[15px]'>
					<DarkorBright dark={dark} setDark={setDark} />
					<div className='location text-[28px] text-[#212121] mb-5'>Taipei</div>
					<div className='description text-[16px] text-[#828282] mb-8'>Cloudy</div>
					<div className='current-weather flex justify-between items-center mb-8'>
						<div className='temperature flex text-[#757575] text-8xl font-light'>
							<span>23</span>
							<div className='font-normal text-[42px]'>°C</div>
						</div>
						<DayCloudyIcon />
						<svg width='26' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip0)' fill='#B9C1C6'>
								<path d='M5.702 6.888c.303-.36.744-.56 1.212-.547.46.012.881.23 1.164.607.227.305.672.37 1.008.15a6.885 6.885 0 011.228-.64c.382-.15.58-.543.46-.911a1.49 1.49 0 01.18-1.294c.26-.39.68-.634 1.15-.672a9.28 9.28 0 012.311.105c.468.081.864.364 1.087.776.22.406.242.88.061 1.304-.152.357.008.765.38.952.406.203.803.457 1.158.74.321.258.762.235 1.023-.053.31-.342.75-.521 1.209-.491.469.03.892.272 1.16.662a9.273 9.273 0 011.065 2.056 1.52 1.52 0 01-.13 1.324c-.24.393-.641.65-1.101.706-.384.046-.657.39-.635.8.026.461.003.926-.065 1.383-.06.398.185.774.567.854.45.098.825.389 1.03.801.208.42.212.904.01 1.33a9.152 9.152 0 01-1.255 1.963c-.303.36-.744.56-1.212.547-.46-.012-.88-.23-1.164-.607-.226-.306-.67-.37-1.008-.149-.386.253-.799.468-1.228.639-.382.15-.58.543-.46.912.142.438.076.91-.18 1.293-.26.39-.68.634-1.15.672a9.283 9.283 0 01-2.311-.105 1.523 1.523 0 01-1.087-.776 1.49 1.49 0 01-.061-1.304c.152-.357-.01-.766-.38-.951a6.58 6.58 0 01-1.158-.742c-.327-.258-.762-.234-1.023.054-.31.343-.75.521-1.209.491a1.516 1.516 0 01-1.16-.662 9.311 9.311 0 01-1.063-2.055 1.516 1.516 0 01.128-1.324 1.492 1.492 0 011.1-.706c.384-.046.658-.39.635-.8a6.839 6.839 0 01.065-1.383c.06-.398-.186-.774-.558-.853l-.008-.002a1.49 1.49 0 01-1.03-.8 1.518 1.518 0 01-.01-1.33 9.224 9.224 0 011.255-1.964zm-.555 2.295c-.1.21-.098.449.004.654.097.2.28.34.506.389l.005.001c.77.168 1.276.924 1.157 1.725a6.08 6.08 0 00-.058 1.226c.044.823-.522 1.516-1.317 1.61a.72.72 0 00-.53.342.747.747 0 00-.063.653c.245.666.573 1.3.975 1.883a.755.755 0 00.572.329.718.718 0 00.583-.237c.501-.554 1.309-.646 1.94-.242.048.03.096.064.143.1.314.25.663.474 1.022.654.745.365 1.06 1.21.745 1.949a.717.717 0 00.029.628c.11.203.306.343.539.383.698.12 1.41.153 2.118.097a.745.745 0 00.566-.33.719.719 0 00.087-.626c-.247-.761.145-1.565.911-1.87a6.103 6.103 0 001.09-.566 1.525 1.525 0 012.059.34.718.718 0 00.559.29.746.746 0 00.596-.27 8.31 8.31 0 001.149-1.797.748.748 0 00-.004-.655.723.723 0 00-.506-.388c-.772-.166-1.282-.922-1.162-1.726.06-.404.08-.817.058-1.226-.045-.823.522-1.515 1.316-1.61a.72.72 0 00.531-.341.747.747 0 00.063-.653 8.496 8.496 0 00-.975-1.883.752.752 0 00-.573-.329.717.717 0 00-.583.238c-.54.596-1.435.658-2.082.14a5.879 5.879 0 00-1.021-.654c-.738-.368-1.061-1.21-.745-1.95a.717.717 0 00-.03-.628.749.749 0 00-.538-.382 8.491 8.491 0 00-2.119-.097.745.745 0 00-.566.33.718.718 0 00-.087.625c.247.761-.145 1.565-.91 1.87a6.102 6.102 0 00-1.09.566c-.679.445-1.58.299-2.06-.34a.718.718 0 00-.558-.29.748.748 0 00-.596.27 8.393 8.393 0 00-1.15 1.798z' />
								<path d='M14.928 9.578a3.878 3.878 0 011.175 5.35 3.878 3.878 0 01-5.35 1.175 3.878 3.878 0 01-1.175-5.35 3.878 3.878 0 015.35-1.175zM11.17 15.45c1.44.922 3.36.5 4.28-.94.922-1.438.5-3.358-.94-4.28a3.102 3.102 0 00-4.28.94 3.102 3.102 0 00.94 4.28z' />
							</g>
							<defs>
								<clipPath id='clip0'>
									<path
										fill='#fff'
										transform='scale(-1 1) rotate(-32.62 4.285 48.894)'
										d='M0 0h18.592v18.592H0z'
									/>
								</clipPath>
							</defs>
						</svg>
						;
					</div>
					<div className='airflow flex items-center text-base font-light text-[#828282] mb-5'>
						<AirFlowIcon style={{ width: '25px', height: 'auto', marginRight: '30px' }} />
						<span>23 m/h</span>
					</div>
					<div className='rain flex items-center text-base font-light text-[#828282]'>
						<RainIcon style={{ width: '25px', height: 'auto', marginRight: '30px' }} />
						<span>48%</span>
					</div>
					<div className='refresh absolute right-4 bottom-4 text-xs inline-flex items-end text-[#828282]'>
						<span>Last updated: 12:03 AM</span>
						<RefreshIcon style={{ width: '15px', height: '15px', marginLeft: '10px', cursor: 'pointer' }} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
