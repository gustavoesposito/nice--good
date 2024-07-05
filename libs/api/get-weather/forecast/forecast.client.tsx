import axios from 'axios';
import type { ForecastApiResponse } from './type';

const API_KEY = process.env.WEATHER_KEY;

export function getForecast(
  lat: number,
  lon: number,
): Promise<ForecastApiResponse> {
  console.log(API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b1ee9e9f38014afde2cc484de26b3595&units=metric`;
  return axios.get<ForecastApiResponse>(url).then(response => response.data);
}
