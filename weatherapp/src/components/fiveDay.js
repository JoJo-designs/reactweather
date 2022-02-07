import React from 'react';
import '../styles/body.css'
import moment from 'moment'
import scatteredClouds from './images/802.svg'
import sunny from './images/800.svg'
import brokenClouds from './images/803.svg'
import snow from './images/601.svg'
import lightRain from './images/501.svg'

export default function FiveDay(fiveday) {
    let day = fiveday.fiveDay.splice(1,5)
    console.log(day)

const convertTime = (dt) => {
    dt = dt * 1000
    const format = moment(dt).format("MMM Do YYYY")
    return format
}

const selectImage = (id) => { 
    console.log(id)
    
        if (id === 301 ||id === 500 || id === 501) {
            console.log("500 or 501")
            return <img className="smallerImg" src={lightRain} alt="cloud with light rain"></img>
        }
        if (id === 502) {
            console.log("500 or 501")
            return <img className="smallerImg" src={lightRain} alt="cloud with light rain"></img>
        }
        if (id === 600 || id === 601 || id === 616) {
            console.log("600 or 601")
            return <img className="smallerImg" src={snow} alt="cloud with snow"></img>
        }
        if (id === 800) {
            console.log("800")
            return <img className="smallerImg" src={sunny} alt="Sunny weather"></img>
        }
        if (id === 801 || id === 802 || id === 803) {
            console.log("801 or 802 or 804")
            return <img className="smallerImg" src={scatteredClouds} alt="Cloudy weather"></img>
        }
        if (id === 804) {
            console.log("804")
            return <img className="smallerImg" src={brokenClouds} alt="Few Clouds"></img>
        }
}
 
   return(
       <div>
           <h3 className="five">Five Day Forecast </h3>
           {day.map((value) => 
           <div className="fiveBoxes" key={value.dt}>
               <p className="date">{convertTime(value.dt)}</p>
                <div className="centerImg">{selectImage(value.weather[0].id)}</div>
                <p className="dailytext">{value.weather[0].description}</p>
                <p className="dailytext">Temp: {Math.floor(value.temp.day)}</p>
                <p className="dailytext">Humidity: {Math.floor(value.humidity)}</p>
           </div>

           )}
       </div>
   )
}