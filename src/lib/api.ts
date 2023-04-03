import { API_KEY_OPENWEATHERMAP } from "$env/static/private";
import { API_BASE_OPENWEATHERMAP } from "./constants";
import type { OpenWeatherMapGeoCodingAPIResult } from "./types";

export async function getCities(q: string) {
    // TODO: improve searching
    const endpoint = `${API_BASE_OPENWEATHERMAP}/geo/1.0/direct?q=${q}&limit=5&appid=${API_KEY_OPENWEATHERMAP}`

    const res = await fetch(endpoint)
    const cities: OpenWeatherMapGeoCodingAPIResult = await res.json();

    return cities
}