import axios from 'axios';
import type { WeatherApiResponse } from './type';

const API_KEY = process.env.WEATHER_KEY;

export function getWeather(
  lat: number,
  lon: number,
): Promise<WeatherApiResponse> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return axios.get<WeatherApiResponse>(url).then(response => response.data);
}
