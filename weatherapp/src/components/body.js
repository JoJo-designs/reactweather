import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

export default function Body(cityData) {

    const [ appData, setAppData ] = useState('')

    async function fetchData() {
        console.log(cityData.cityData.lat)
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.cityData.lat}&lon=${cityData.cityData.lon}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const weather = await res.json()
            console.log(weather)
            setAppData(weather)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( () => {
        if(cityData.cityData.hasData === true) {
            fetchData()
        }
    }, [cityData]);

    function upperCase() {
        const name = cityData.cityData.cityName
        const first = name.charAt(0).toUpperCase()
        const removeFirst = name.slice(1)
        return first+removeFirst
    }


    return(
        
        <div>
            { appData ?
            <div>
                <h2>{upperCase()}</h2>
                <h3>Current Forecast</h3>
                <Moment format="ddd MMM, D"></Moment>
                <h3>temp: {Math.floor(appData.current.temp)}</h3>
            </div> 
            :
            <h2>Waiting for data...</h2>
            }
        </div>
    )
}