import axios from 'axios';
import type { ForecastApiResponse } from './type';

const API_KEY = process.env.WEATHER_KEY;

export function getForecast(
  lat: number,
  lon: number,
): Promise<ForecastApiResponse> {
  const url =
    ' https://api.openweathermap.org/data/2.5/weather?lat=-23.550520&lon=-46.633309&appid=b1ee9e9f38014afde2cc484de26b3595&units=metric';
  return axios.get<ForecastApiResponse>(url).then(response => response.data);
}
