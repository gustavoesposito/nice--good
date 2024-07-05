'use client';
import { useState } from 'react';
import { Button } from '@weather-libs/ui';
import { getForecast, getWeather } from '@weather-libs/api';

export default function Home() {
  const [data, setData] = useState(null);

  function onFetch() {
    getForecast(-23.55052, -46.633309)
      .then((data: any) => {
        console.log('Forecast data:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching forecast:', error);
      });
  }
  function onWeather() {
    getWeather(-23.55052, -46.633309)
      .then((data: any) => {
        console.log('Weather data:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching forecast:', error);
      });
  }
  return (
    <>
      <Button onClick={onWeather}>Clica em mim</Button>
      <Button onClick={onFetch}>Aperte aqui</Button>
    </>
  );
}
