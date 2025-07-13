import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unit, setUnit] = useState('C');

  const fetchCoordinates = async (locationName) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json`
      );
      if (!response.ok) throw new Error('Location not found');
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return data.results[0];
      }
      throw new Error('Location not found');
    } catch (err) {
      throw err;
    }
  };

  const fetchWeatherData = async (locationName) => {
    if (!locationName) return;
    setIsLoading(true);
    setErrorMsg('');
    try {
      const { latitude, longitude, name, country } = await fetchCoordinates(locationName);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
      );
      if (!response.ok) throw new Error('Failed to fetch weather data');
      const data = await response.json();
      setWeatherInfo({
        name,
        country,
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        wind: data.current.wind_speed_10m,
        code: data.current.weather_code,
      });
    } catch (err) {
      setErrorMsg('Failed to fetch weather data. Please check the location name.');
      setWeatherInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const getWeatherInfo = (code) => {
    const weatherMap = {
      0: { text: 'Clear sky', icon: '☀️' },
      1: { text: 'Mainly clear', icon: '🌤️' },
      2: { text: 'Partly cloudy', icon: '⛅' },
      3: { text: 'Overcast', icon: '☁️' },
      45: { text: 'Fog', icon: '🌫️' },
      48: { text: 'Depositing rime fog', icon: '🌫️' },
      51: { text: 'Light drizzle', icon: '🌧️' },
      53: { text: 'Moderate drizzle', icon: '🌧️' },
      55: { text: 'Dense drizzle', icon: '🌧️' },
      61: { text: 'Light rain', icon: '🌧️' },
      63: { text: 'Moderate rain', icon: '🌧️' },
      65: { text: 'Heavy rain', icon: '🌧️' },
      71: { text: 'Light snow', icon: '❄️' },
      73: { text: 'Moderate snow', icon: '❄️' },
      75: { text: 'Heavy snow', icon: '❄️' },
      80: { text: 'Light rain showers', icon: '🌦️' },
      81: { text: 'Moderate rain showers', icon: '🌦️' },
      82: { text: 'Violent rain showers', icon: '🌦️' },
      95: { text: 'Thunderstorm', icon: '⛈️' },
      96: { text: 'Thunderstorm with light hail', icon: '⛈️' },
      99: { text: 'Thunderstorm with heavy hail', icon: '⛈️' },
    };
    return weatherMap[code] || { text: 'Unknown', icon: '❓' };
  };

  const convertTemp = (temp, unit) => {
    if (unit === 'F') {
      return (temp * 9) / 5 + 32;
    }
    return temp;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeatherData(location);
  };

  const switchUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Weather Dashboard
        </h1>
        <div className="mb-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between mt-2">
            <button
              onClick={handleSearch}
              className="w-3/4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Fetch Weather
            </button>
            <button
              onClick={switchUnit}
              className="w-1/5 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition"
            >
              {unit === 'C' ? '°F' : '°C'}
            </button>
          </div>
        </div>
        {isLoading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p>Loading...</p>
          </div>
        )}
        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
        {weatherInfo && (
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              {weatherInfo.name}, {weatherInfo.country}
            </h2>
            <p className="text-lg capitalize">
              {getWeatherInfo(weatherInfo.code).icon}{' '}
              {getWeatherInfo(weatherInfo.code).text}
            </p>
            <p className="text-4xl font-bold">
              {Math.round(convertTemp(weatherInfo.temp, unit))}°{unit}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-600">Humidity</p>
                <p>{weatherInfo.humidity}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Wind Speed</p>
                <p>{weatherInfo.wind} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;