import React, { useState, useEffect } from 'react';


export default function SearchBar() {
    
   const [cityData, setCityData] = useState({
       cityName: null,
       lat: null,
       lon: null,
   })


    const handleChange = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputType = target.name;

        if (inputType === "cityName") {
            setCityData({cityName: inputValue})
        }
    }

    async function getGeo() {
        try {
           const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityData.cityName}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const data = await res.json();
            console.log(data)
            setCityData({cityName: data[0].name, lat: data[0].lat, lon: data[0].lon})
        } catch (error) {
            console.log(error)
        }
     } 
    

    return (
        <div>
            <input 
                placeholder="Search a City"
                value={cityData.cityName}
                name="cityName"
                type="text"
                onChange={handleChange}
            >
            </input>
            <button onClick={getGeo}>Search</button>
        </div>
    )
}