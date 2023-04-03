<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const weather = data.city.weather;

	function getWeatherDisplayText() {
		const weatherText = weather.weather[0].main;

		// TODO: add missing checks
		if (weatherText === 'Clouds') return 'Currently cloudy';

		return 'Not implemented yet :(';
	}

	function getWeatherVisibilityText() {
		const visibility = weather.visibility;

		if (visibility >= 9 * 1000) return 'Clear';
		else if (visibility >= 7 * 1000) return 'Good';
		else if (visibility >= 4 * 1000) return 'Okey';

		return 'Bad';
	}
</script>

{#if data.city.weather}
	<div>
		<h1>Weather of {data.city.weather.name} ({data.city.weather.sys.country})</h1>
		<span>{getWeatherDisplayText()} ({weather.weather[0].description})</span>

		<div>
			<h3>Temperature</h3>
			<span>{Math.floor(weather.main.temp)}</span>
		</div>

		<div>
			<h3>Feels like</h3>
			<span>{Math.floor(weather.main.feels_like)}</span>
		</div>

		<div>
			<h3>Minimum Temperature Within The Day</h3>
			<span>{Math.floor(weather.main.temp_min)}</span>
		</div>

		<div>
			<h3>Maximum Temperature Within The Day</h3>
			<span>{Math.floor(weather.main.temp_max)}</span>
		</div>

		<div>
			<h3>Pressure</h3>
			<span>{weather.main.pressure} hPa</span>
		</div>

		<div>
			<h3>Humidity</h3>
			<span>{weather.main.humidity}%</span>
		</div>

		<div>
			<h3>Visibility</h3>
			<span>{weather.visibility / 1000}km ({getWeatherVisibilityText()})</span>
		</div>
	</div>
{:else}
	<span>No information for weather</span>
{/if}

<hr />

<div>
	<h1>Places Should Be Visited</h1>

	<div>places goes here</div>
</div>
