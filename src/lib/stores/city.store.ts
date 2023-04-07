import type { OpenWeatherMapGeoCodingAPIResultOne } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

type CityStore = Writable<{
    weather?: OpenWeatherMapGeoCodingAPIResultOne;
    // todo
    someData?: any;
}>

const city: CityStore = writable({});
export default city;