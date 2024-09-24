import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    getLocation();
  }, []);
  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;
        const key = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.latitude}&appid=${key}&units=metric`
        );
        const data = await response.json();
        setWeather({
          temp: data.main.temp,
          humidity: data.main.humidity,
          city: data.name,
          weather: data.weather[0].main,
          icon: data.weather[0].icon,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  return (
    <>
      {weather?.weather ? (
        <img
          height="30px"
          src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
          alt=""
        />
      ) : (
        <p>로딩중...</p>
      )}
    </>
  );
}
