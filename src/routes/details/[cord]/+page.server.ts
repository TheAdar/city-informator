import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { API_KEY_OPENWEATHERMAP } from '$env/static/private';
import { API_BASE_OPENWEATHERMAP } from '$lib/constants';

export const load = (async ({ params }) => {
  const [lat, lon] = params.cord.split("*")

  if (!lat || !lon) {
    throw error(400)
  }

  const res = await fetch(`${API_BASE_OPENWEATHERMAP}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_OPENWEATHERMAP}&units=metric`);

  // TODO: fix types - https://openweathermap.org/current
  const cityWeatherData = await res.json()


  if (cityWeatherData.message) {
    return {
      city: { weather: null }
    }
  }


  return {
    city: { weather: cityWeatherData }
  }
}) satisfies PageServerLoad;