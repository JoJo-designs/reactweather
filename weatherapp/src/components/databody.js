import React, { useState, useEffect } from 'react';
// import React from 'react';

export default function DataBody(weatherData) {

    const [dataExsit, setDataExsit] = useState('')
    
    useEffect(() => {
        console.log(weatherData)
        if (weatherData.weatherData !== '') {
            console.log("we have data") 
            setDataExsit(true)
        }
    }, [weatherData])

    // const build = () => {
    //     console.log(weatherData)
    //     if (weatherData.weatherData !== '') {
    //         console.log("data")
    //     } else {
    //         console.log("no Data yet")
    //     }
    // }


    return (
        <div>
            { dataExsit ? 
                <div> We have data </div> 
            :
                <div> We don't have data</div> 
            }
        </div>
    )
   
}