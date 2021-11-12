import React, { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
// import { History } from './history';
import DataBody from './databody';

export default function SearchBar(weatherDataB) {
    
    const [cityName, setCityName] = useState('');
    const [searchCity, setSearchCity] = useState('')
    const [weatherData, setWeatherData] = useState('')


    const handleChange = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputType = target.name;

        if (inputType === "cityName") {
            setCityName(inputValue)
        }
    }

     async function getGeo() {
        try {
           const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const data = await res.json();
            getWeather(data)
        } catch (error) {
            console.log(error)
        }
     } 


     async function getWeather(data) {
         try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const weather = await res.json();
            setWeatherData(weather)
         } catch(error) {
             console.log(error)
         }
         NewHistory(data)
     }

      const NewHistory = (data) => {
          const { add } = useIndexedDB('cities')
          add({cityName: cityName, lat: data[0].lat, lon: data[0].lon}).then(
            event => {
                console.log('ID Generated: ', event);
              },
              error => {
                  console.log(error);
              }
          );
      };

      const check = () => {
          console.log(weatherDataB)
          if(weatherDataB === !false) {
              setWeatherData(weatherDataB)
              console.log("if activated")
          }
      }

      

        return (
            <div>
                {check()}
                <input
                placeholder="Search a City"
                value={cityName}
                name="cityName"
                type="text"
                onChange={handleChange}
                >
                </input>
                <button onClick={getGeo} >Search</button>
                { weatherData ? 
                <DataBody weatherData={weatherData}/>
                :
                <p> look up data </p>
                }
                
            </div>    
        )
}