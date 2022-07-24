import { useWeather } from "../context/WeatherContext";
function Days() {
  const { days, weatherData, oneCity } = useWeather();
  console.log(oneCity.sys?.country);

  return (
    <div className="day-boxes">
      <div className="current-day-box">
        <div className="onceTitle">
          {oneCity?.name} / {oneCity?.sys?.country}
        </div>
        <div className="onceImage">
          <img
            src={`https://openweathermap.org/img/wn/${oneCity.weather?.[0]?.icon}@4x.png`}
            alt={oneCity.weather?.[0]?.description.toUpperCase()}
            title={oneCity.weather?.[0]?.description.toUpperCase()}
          />
        </div>
        <div className="onceTemp">
          <div className="weather-inner">
            <strong>{Math.round(oneCity?.main?.temp)}°</strong>
            <small>{new Date(oneCity.dt * 1000).toLocaleDateString()}</small>
            <span>{days?.long[new Date(oneCity.dt * 1000).getDay()]}</span>
          </div>
        </div>
        <div className="onceHumidty">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${oneCity?.weather?.[0]?.icon}@4x.png`}
              alt={oneCity.weather?.[0]?.description.toUpperCase()}
              title={oneCity.weather?.[0]?.description.toUpperCase()}
            />
            <span>{oneCity.weather?.[0]?.description}</span>
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${oneCity.weather?.[0]?.icon}@4x.png`}
              alt={oneCity.weather?.[0]?.description.toUpperCase()}
              title={oneCity.weather?.[0]?.description.toUpperCase()}
            />
            <span>Humidity : {oneCity.main?.humidity}</span>
          </div>
        </div>
      </div>

      {weatherData.map((wet, i) => (
        <div className="day-box" key={i}>
          <div className="day-title">
            {days.short[new Date(wet.dt * 1000).getDay()]}
          </div>
          <img
            className="day-img"
            src={`https://openweathermap.org/img/wn/${wet.weather[0].icon}@2x.png`}
            alt={wet.weather[0].description.toUpperCase()}
            title={wet.weather[0].description.toUpperCase()}
          />
          <div className="day-deg">
            <span className="tmp-text">
              {wet.weather[0].main.toLowerCase()}
            </span>
            <span className="tmp-high">{Math.round(wet.temp["eve"])}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Days;
