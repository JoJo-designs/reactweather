import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import '../styles/body.css'
import scatteredClouds from './images/802.svg'
import sunny from './images/800.svg'
import brokenClouds from './images/803.svg'
import snow from './images/601.svg'
import lightRain from './images/501.svg'


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



    // uvIndex will find the uv index and return it with the class that matches 
    // level
    const uvIndex = () => {
        console.log(appData.current.uvi)
    }

    // selectImage use weather data and returns a matching image. the ones the api
    // provides are very small.
    const selectImage = () => { 
        if (appData.current.weather[0].id === 501) {
            return <img src={lightRain}></img>
        }
        if (appData.current.weather[0].id === 601) {
            return <img src={snow}></img>
        }
        if (appData.current.weather[0].id === 800) {
            return <img src={sunny}></img>
        }
        if (appData.current.weather[0].id === 802) {
            return <img src={scatteredClouds}></img>
        }
        if (appData.current.weather[0].id === 803 || 804) {
            return <img src={brokenClouds}></img>
        }
       
    }

    return(
        
        <div >
            { appData ?
            <div className="container">
                <h2 className="bodyHeader columns twelve">{cityData.cityData.cityName} Current Forecast</h2>
                <div className="columns eight">
                <Moment format="ddd MMM, D"></Moment>
                <h3>temp: {Math.floor(appData.current.temp)}</h3>
                <h3>humidity: {Math.round(appData.current.humidity)}</h3>
                <h3>wind speed: {Math.round(appData.current.wind_speed)}</h3>
                <div>{uvIndex()}</div>
                </div>
                <div className="columns three">{selectImage()}</div>
            </div> 
            :
            <h2>Waiting for data...</h2>
            }
        </div>
    )
}