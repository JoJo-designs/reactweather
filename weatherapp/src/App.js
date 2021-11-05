import React, { useState} from 'react';



export default function App() {
    const [weatherData, setWeatherData] = useState('')

    const getWeather = () => {
        if (weatherData === '') {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=43.7001&lon=-79.4163&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            });
        }};

    return (
        <div>
            {getWeather()}
            <p>this is an app</p>
        </div>
    )
}