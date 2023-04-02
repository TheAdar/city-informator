import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { API_KEY_OPENWEATHERMAP } from '$env/static/private';

export const load = (async ({ params }) => {
  const [lat, lon] = params.cord.split("*")

  if (!lat || !lon) {
    throw error(400)
  }

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_OPENWEATHERMAP}`);
  
  // TODO: fix types - https://openweathermap.org/current
  const cityWeatherData = await res.json()

  return {
    city: { weather: cityWeatherData }
  }
}) satisfies PageServerLoad;