import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import SearchBar from './searchbar';

export function History() {
    const { getAll } = useIndexedDB('cities');
    const [history, setHistory] = useState('')
    const [weatherDataB, setWeatherDataB] = useState('')

    useEffect(() => {
        getAll().then(data => {
            setHistory(data)
            console.log(data)
        });
    }, []);
    
    const handleclick = (data) => {
        getWeather(data)
    }

    async function getWeather(data) {
        try {
           const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
           const weather = await res.json();
           setWeatherDataB(weather)
        } catch(error) {
            console.log(error)
        }
        }

    return (
        <div>
            <SearchBar weatherDataB={weatherDataB}/>
            { history ? 
            <div>
                <h4> is history </h4>
                {/* loop makes buttons for each element in the database and stores the lat and lon values
                I am hoping that when I make the element clickable that I can use the values to 
                call the data from the api */}
                {history.map((data) => (
                    <button key={data.id}
                    onClick={() => handleclick(data)}
                    >{data.cityName}</button>
                ))}
            </div>
            : 
            <div><h4> waiting... </h4></div>
            }
        </div>
    )
}