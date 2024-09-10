import WeatherList from "../WeatherList";

export default function WeatherReports(props: unknown) {
  return (
    <>
      <h1>Weather Report</h1>
      <WeatherList />
      {props}
    </>
  );
}
