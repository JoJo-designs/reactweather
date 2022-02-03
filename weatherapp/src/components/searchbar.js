import React, { useState } from "react";
import { useIndexedDB } from 'react-indexed-db';
import '../styles/searchbar.css'

export default function SearchBar(props) {

    const [ searchValue, setSearchValue ] = useState('')



    const handleChange = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputType = target.name;

        if (inputType === "searchValue") {
            setSearchValue(inputValue)
        }
    }

    async function getGeo() {
        try {
            const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const data = await res.json()
            NewHistory(data)
            sendState(data)
        } catch (error) {
            console.log(error)
            alert("We ran into an issue. The inputted name may not be correct. please try again.")
        }
    }

    const sendState = (data) => {
        props.onChange(data)
    }
    
         const NewHistory = (data) => {
        console.log(data)
        const { add } = useIndexedDB('cities')
        add({cityName: searchValue, lat: data[0].lat, lon: data[0].lon}).then(
            event => {
                console.log('ID Generated: ', event)
            },
            error => {
                console.log(error)
            }
        );
    };

    const changeState = () => {
        console.log("state will be changed")
        if (useAdvanced === false) {
            setUseAdvanced(true)
        } else {
            setUseAdvanced(false)
        }
    }


    // advance search test

    const [ useAdvanced, setUseAdvanced ] = useState(false)

    const [advCity, setAdvCity] = useState('')
    const [advCountry, setAdvCountry] = useState("")

    const handleCountry = (event) => {
        const { target } = event;
        const inputValue = target.value;
        setAdvCountry(inputValue)
    
    }

    const handleCityName = (event) => {
        const{ target } = event
        const inputValue = target.value;

       setAdvCity(inputValue)

    }


    return (
        <div className="searchBox">
            <input 
            className="inputbox"
            placeholder="Search a City"
            value={searchValue}
            name="searchValue"
            type="text"
            onChange={handleChange}
            >  
            </input>
            <button onClick={getGeo} className="searchBtn">Search</button>

            {/* Advanced search functionality */}
            
            { useAdvanced ? 
            <div className="advancedSearch">
                <button className="Advance" onClick={changeState}>Advanced Search</button>

                <input 
                placeholder="Search a City"
                value={advCity}
                name="advCity"
                type="text"
                onChange={handleCityName}
                ></input>

                <select name="country" onChange={handleCountry}>
                    <option value="ISO 3166-2:CA" >Canada</option>
                    <option value="ISO 3166-2:US">USA</option>
                    <option value="ISO 3166-2:GB">UK</option>
                </select>
                <button>search</button>
            </div> 
            : 
            <div>
                <button className="Advance" onClick={changeState}>Advanced Search</button>
            </div>}
        
        </div>
    )
}