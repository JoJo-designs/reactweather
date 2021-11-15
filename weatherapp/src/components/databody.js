import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
// import React from 'react';

export default function DataBody(weatherData) {

    const [dataExsit, setDataExsit] = useState('')
    const { getByIndex } = useIndexedDB('cities');
    const [city, setCity] = useState()
    
    
    useEffect(() => {
        console.log(weatherData)
        if (weatherData.weatherData !== '') {
            console.log("we have data") 
            setDataExsit(true)
                let getLat = String(weatherData.weatherData.lat)
                console.log(getLat)
                getByIndex('lat', getLat).then(cityData => {
                setCity(cityData);
                console.log(city)
            })
        }
    }, [weatherData])


    console.log(city)

    return (
        <div>
            { dataExsit ? 
                <div> 
                    {/* <h2>{weatherData.weatherData.timezone.split("/").pop()}</h2> */}
                    <h2>this is city name</h2>
                    <h3>temp: {weatherData.weatherData.current.temp}</h3>
                </div> 
            :
                <div> We don't have data</div> 
            }
        </div>
    )
   
}