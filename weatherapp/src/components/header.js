import React, { useState } from 'react';
import SearchBar from './searchbar';
import Body from './body';

export function Header() {

    const [cityData, setCityData] = useState({
        cityName: '',
        lat: '',
        lon: '',
        hasData: false
    })

    function handleUpdate(data) {
        console.log(data)
        setCityData({cityName: data[0].name, lat: data[0].lat, lon: data[0].lon, hasData: true})
    }

    const isData = () => {
        if (cityData.hasData === true) {
            return <Body cityData={cityData}/>
        } else {
            return <h3>No data yet</h3>
        }
    }

    return (
    <div>
        <h1>Weather App</h1>
        <SearchBar cityData={cityData} onChange={handleUpdate}/>
        <div>
            {isData()}
        </div>
    </div>
    );
};

