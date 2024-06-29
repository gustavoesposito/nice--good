export type WeatherApiResponse = {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  dt: number;
  sys: SystemDetails;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Coordinates = {
  lon: number;
  lat: number;
};

export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};

export type Rain = {
  '1h'?: number;
  '3h'?: number;
};

export type Clouds = {
  all: number;
};

export type SystemDetails = {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
};
