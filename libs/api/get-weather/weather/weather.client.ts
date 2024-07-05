import axios from 'axios';
import type { WeatherApiResponse } from './type';

const API_KEY = process.env.WEATHER_KEY;

export function getWeather(
  lat: number,
  lon: number,
): Promise<WeatherApiResponse> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b1ee9e9f38014afde2cc484de26b3595&units=metric`;

  return axios.get<WeatherApiResponse>(url).then(response => response.data);
}
