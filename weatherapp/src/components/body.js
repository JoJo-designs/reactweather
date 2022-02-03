import React, { useState, useEffect } from 'react';
// import Moment from 'react-moment';
import FiveDay from './fiveDay';
import '../styles/body.css'
import '../styles/alignment.css'
import scatteredClouds from './images/802.svg'
import sunny from './images/800.svg'
import brokenClouds from './images/803.svg'
import snow from './images/601.svg'
import lightRain from './images/501.svg'
import heavyRain from './images/302.svg'


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
            alert("We ran into an issue. Please try again.")
        }
    }
    useEffect( () => {
        if(cityData.cityData.hasData === true) {
            fetchData()
        }
    }, [cityData]);


    const capitalize = () => {
        const name = cityData.cityData.cityName
        return name[0].toUpperCase() + name.substring(1)
    }

    // uvIndex will find the uv index and return it with the class that matches 
    // level
    const uvIndex = () => {
        if (appData.current.uvi < 3) {
            console.log("UV is Low")
            return ( <h3 className=" uv low">UV Index: {appData.current.uvi}</h3> )
        }
        if (appData.current.uvi < 4 &&  appData.current.uvi > 7) {
            console.log("UV is Mid")
            return ( <h3 className=" uv mid">UV Index: {appData.current.uvi}</h3> )
        }
        if (appData.current.uvi > 8) {
            console.log("UV is High")
            return ( <h3 className=" uv high">UV Index: {appData.current.uvi}</h3> )
        }
    }

    // selectImage use weather data and returns a matching image. the images the api
    // provides are very small. 
    const selectImage = () => { 
        const id = appData.current.weather[0].id

        if (id === 302) {
            return <img src={heavyRain} alt="cloud with light rain"></img>
        }
            if (id === 301 ||id === 500 || id === 501) {
                console.log("500 or 501")
                return <img src={lightRain} alt="cloud with light rain"></img>
            }
            if (id === 600 || id === 601 || id === 616) {
                console.log("600 or 601")
                return <img src={snow} alt="cloud with snow"></img>
            }
            if (id === 800) {
                console.log("800")
                return <img src={sunny} alt="Sunny weather"></img>
            }
            if (id === 801 || id === 802 || id === 803) {
                console.log("801 or 802 or 804")
                return <img src={scatteredClouds} alt="Cloudy weather"></img>
            }
            if (id === 804) {
                console.log("804")
                return <img src={brokenClouds} alt="Few Clouds"></img>
            }
    }
    

    return(
        
        <div >
            { appData ?  
            <div>
            <div className="forecast">
                <h2 className="bodyHeader">{capitalize()} Current Forecast</h2>
                {/* dataBox wraps all the data */}
                <div className="dataBox"> 
                {/* data only wraps the data displayed with word */}
                <div className="data">
                {/* <Moment format="ddd MMM, D"></Moment> */}
                <h3>Temp: {Math.floor(appData.current.temp)}</h3>
                <h3>Humidity: {Math.round(appData.current.humidity)}</h3>
                <h3>Wind Speed: {Math.round(appData.current.wind_speed)}</h3>
                <div>{uvIndex()}</div>
                </div>
                {/* weatherImg is just the image */}
                <div className="weatherImg">{selectImage()}
                <p>{appData.current.weather[0].description}</p>
                </div>
                </div>
                </div>

                {/* this is the five day forecast  */}
                <div>
                    <FiveDay fiveDay={appData.daily}/>
                </div>
    
                
            </div> 
            :
            <h2>Waiting for data...</h2>
            }
        </div>
    )
}