import { useEffect, useState } from "react";

function WeatherCity(location: string) {
  const [cityWeather, setCityWeather] = useState(location);

  useEffect(() => {
    const url = `https://wttr.in/${(location !== 'Your location' && location.replace(/\s/g, '') || '')}?format=j1`;
    console.log(`Location: ${location}, URL: ${url}`);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.current_condition[0]) {
          setCityWeather(`${location}: ${data.current_condition[0].temp_F}°F / ${data.current_condition[0].temp_C}°C`);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setCityWeather(
          `Could not retrieve weather for ${location}.`
        );
      });
  }, [location]);

  // useEffect(() => {
  //   const url =
  //     "https://wttr.in/" + (location !== "Local" && location || '') + "?format=j1";
  //   setCityWeather(url);
  // }, [location]);

  return <>{cityWeather}</>;
}

export default WeatherCity;
