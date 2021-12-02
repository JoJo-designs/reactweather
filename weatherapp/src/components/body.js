import React, { useState, useEffect } from 'react';

export default function Body(cityData) {
    console.log(cityData)

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

    return(
        <div>
            { appData ?
            <div>
                <h2>{cityData.cityData.cityName}</h2>
                <h3>Current Forecast</h3>
                <h3>temp: {Math.round(appData.current.temp)}</h3>
            </div> 
            
            :
            <h2>Waiting for data...</h2>
            }
        </div>
    )
}