import { error } from "@sveltejs/kit"
import type { PageServerLoad } from './$types';
import { API_KEY_OPENWEATHERMAP } from "$env/static/private";
import type { OpenWeatherMapGeoCodingAPIResult } from "$lib/types";

export const load = (async ({ url }) => {
    const query = url.searchParams.get("q")

    if (!query) {
        throw error(400)
    }

    const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY_OPENWEATHERMAP}`

    const res = await fetch(endpoint)
    const cities: OpenWeatherMapGeoCodingAPIResult = await res.json();

    return {
        cities
    }

}) satisfies PageServerLoad;