import React, { useState, useEffect } from 'react';
// import React from 'react';

export default function DataBody(weatherData) {

    const [dataExsit, setDataExsit] = useState('')
    const [city, setCity] = useState('')
    
    
    useEffect(() => {
        console.log(weatherData)
        if (weatherData.weatherData !== '') {
            console.log("we have data") 
            setDataExsit(true)
        }
    }, [weatherData])

    return (
        <div>
            { dataExsit ? 
                <div> 
                    <h2>{weatherData.weatherData.timezone.split("/").pop()}</h2>
                    <h3>temp: {weatherData.weatherData.current.temp}</h3>
                </div> 
            :
                <div> We don't have data</div> 
            }
        </div>
    )
   
}