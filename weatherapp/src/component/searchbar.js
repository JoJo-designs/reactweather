import React, { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import DataBody from './databody';


export default function SearchBar(itemInfo) {

    console.log(itemInfo)
    
    const [cityName, setCityName] = useState('');

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
            setCityName(inputValue)
        }
    }

     async function getGeo() {
        try {
           const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const data = await res.json();
            setCityData({cityName: data[0].name, lat: data[0].lat, lon: data[0].lon})
            // NewHistory(data)
        } catch (error) {
            console.log(error)
        }
        console.log(cityData)
     } 

    //  const NewHistory = (data) => {
    //     const { add } = useIndexedDB('cities')
    //     add({cityName: cityName, lat: data[0].lat, lon: data[0].lon}).then(
    //       event => {
    //           console.log('ID Generated: ', event);
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // };


    useEffect(() => {
        if(itemInfo !== '' ) {
            console.log(itemInfo.itemInfo)
            setCityData({cityName: itemInfo.itemInfo.cityName, lat: itemInfo.itemInfo.lat, lon: itemInfo.itemInfo.lon})
        }
    }, [itemInfo])

        return (
            <div>
                <input
                placeholder="Search a City"
                value={cityName}
                name="cityName"
                type="text"
                onChange={handleChange}
                >
                </input>
                <button onClick={getGeo} >Search</button>
                <DataBody cityData={cityData}/>
            </div>    
        )
}