import "./App.css";

export default function App() {
  let timeData = {
    day: "Saturday",
    hour: 18,
    minute: 40,
  };

  let weatherAppData = {
    city: "Tokyo",
    temperature: 27,
    humidity: 79,
    wind: 5,
    description: "clear sky",
    imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
  };

  return (
    <main>
      <div className="weather">
        <div className="weather-border">
          <div className="top">
            <div className="date">
              <strong>
                {timeData.day} {timeData.hour}:{timeData.minute}
              </strong>
              <h1 className="city">{weatherAppData.city}</h1>
            </div>
          </div>
          <div className="info-columns">
            <div className="main-column">
              <h2 className="temperature">
                <img src={weatherAppData.imgUrl} alt="icon" />{" "}
                {weatherAppData.temperature}
                <small className="celsius">°C</small>
              </h2>
            </div>
            <div className="description-column">
              <ul>
                <li className="description">{weatherAppData.description}</li>
                <li className="humidity">
                  Humidity: {weatherAppData.humidity}%
                </li>
                <li className="wind">Wind: {weatherAppData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
