import { useState, MouseEvent } from "react";
import WeatherCity from "./WeatherCity";

function WeatherList() {
  const locations = [
    "Your location",
    "Phoenix",
    "Washington",
    "Seattle",
    "Bangor",
    "San Francisco",
    "New York City",
  ];

  const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1);

  const handleItemClick =
    (location: string, ndx: number) => (e: MouseEvent) => {
      console.log(location, ndx, e);
      setSelectedLocationIndex(ndx);
    };

  return (
    <>
      <ul className="list-group">
        Weather reports:
        {locations.map((location, ndx) => (
          <li
            key={location}
            className={ `list-group-item${ ndx === selectedLocationIndex && ' active' || ''}` }
            onClick={handleItemClick(location, ndx)}
          >
            {WeatherCity(location)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default WeatherList;
