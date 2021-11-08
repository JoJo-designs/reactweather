import React, { useState} from 'react';

export default function SearchBar() {
    
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState('')

    

    const handleChange = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputType = target.name;

        if (inputType === "cityName") {
            setCityName(inputValue)
            console.log(cityName)
        }
    }

     async function getGeo() {
        try {
           const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const data = await res.json();
            console.log(data)
        getWeather(data)
        } catch (error) {
            console.log(error)
        }
     } 


     async function getWeather(data) {
         try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const weather = await res.json();
            console.log(weather)
         } catch(error) {
             console.log(error)
         }
         
     }

    // const getWeather = (data) => {
    //     console.log(data)
    //     console.log(data[0].lat)
        // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data.lon[0]}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //     });
    // };

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