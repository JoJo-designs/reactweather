import React, { useState} from 'react';

export default function SearchBar() {
    
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState('')
    const [lon, setLon] = useState('')
    const [lat, setLat] = useState('')

    const handleChange = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputType = target.name;

        if (inputType === "cityName") {
            setCityName(inputValue)
            console.log(cityName)
        }
    }

    const getGeo = () => {
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=toronto&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            .then((res) => res.json())
            .then((data) => {
                setLat(data[0].lat) 
                setLon(data[0].lon)
                console.log(lat, lon)
            });
            getWeather()
        };

    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            });
    };

        return (
            <div>
                <input
                placeholder="Search a City"
                value={cityName}
                name="cityName"
                type="text"
                onChange={handleChange}
                >
                </input>
                <button onClick={getGeo} >Search</button>
            </div>    
        )
}