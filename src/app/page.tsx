'use client';
import { useState } from 'react';
import { Button } from '@weather-libs/ui';
import { getForecast } from '@weather-libs/api';

export default function Home() {
  const [data, setData] = useState(null);

  function onFetch() {
    getForecast(40.712776, -74.005974)
      .then((data: any) => {
        console.log('Forecast data:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching forecast:', error);
      });
  }

  return <Button onClick={onFetch}>Clica em mim</Button>;
}
