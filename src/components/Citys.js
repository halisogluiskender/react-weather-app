import { useWeather } from "../context/WeatherContext";
import DarkIcon from "../icons/dark.svg";
import SunIcon from "../icons/sun.svg";
function Citys() {
  const { city, setCity, JsonCity, setIsDark, isDark } = useWeather();
  const HandleChain = (e) => {
    JsonCity.filter((ct) => ct.name === e.target.value && setCity(ct));
  };
  return (
    <div className="select-box">
      <select name="city" id="city" value={city.name} onChange={HandleChain}>
        {JsonCity.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <button onClick={() => setIsDark(isDark === "" ? "dark" : "")}>
        {isDark ? (
          <img src={DarkIcon} alt="Dark Mode" />
        ) : (
          <img src={SunIcon} alt="Light Mode" />
        )}
      </button>
    </div>
  );
}

export default Citys;
