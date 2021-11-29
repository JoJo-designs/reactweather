import React, { useState, useEffect } from 'react';
// import React from 'react';

export default function DataBody(cityData) {

    console.log(cityData)
    
    const [appData, setAppData] = useState()

    async function fetchData() {
        console.log(cityData.cityData.lat)
        try {
           const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.cityData.lat}&lon=${cityData.cityData.lon}&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
           const weather = await res.json();
           console.log(weather)
           setAppData(weather)
       } catch(error) {
           console.log(error)
       } 
    }

    useEffect( () => {
        if(cityData.cityData !== "") {
       fetchData()
    }
    }, [cityData]);

console.log(appData)

    return (
        <div>
             { appData ? <div> 
                    {/* <h1>{cityData.cityData.cityName}</h1>
                    <h3>temp: {Math.round(appData.current.temp)}</h3> */}
                </div>
                : 
                <div> We have no data</div>
                }
                 
        
        </div>
    )
   
}