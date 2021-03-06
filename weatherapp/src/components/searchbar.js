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
            alert("We ran into an issue. The inputted name may not be correct or no value was entered. please try again.")
        }
    }

    const sendState = (data) => {
        props.onChange(data)
    }
    
         const NewHistory = (data) => {
        console.log(data)
        const { add } = useIndexedDB('cities')
        add({cityName: data[0].name, countryCode: data[0].country, lat: data[0].lat, lon: data[0].lon}).then(
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
    const [advCountry, setAdvCountry] = useState('')


    // changes the country
    const handleCountry = (event) => {
        const { target } = event;
        const inputValue = target.value;

        setAdvCountry(inputValue)
    }

    // changes the city name in advanced search
    const handleCityName = (event) => {
        const{ target } = event
        const inputValue = target.value;

       setAdvCity(inputValue)
    }

    async function getAdvanced() {
        console.log("advance search active")
        try {
            const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${advCity},${advCountry}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`)
            const data = await res.json()
            // console.log(data)
            NewHistory(data)
            sendState(data)
        } catch (error) {
            console.log(error)
            alert("We ran into an issue. The inputted name may not be correct or no values were entered. please try again.")
        }
    }


    return (
        <div className="searchBox">

            {/* Advanced search functionality Appears and disappears onClick */}
            
            { useAdvanced ? 
            <div className="advancedSearch">
                

                <input 
                className="Advinputbox"
                placeholder="Search a City"
                value={advCity}
                name="advCity"
                type="text"
                onChange={handleCityName}
                ></input>

                <select className="AdvSelect" name="country" onChange={handleCountry}>
                    <option value="None">Country</option>
                    <option value="CA" >Canada</option>
                    <option value="US">USA</option>
                    <option value="GB">UK</option>
                </select>
                <button className="searchBtn" onClick={getAdvanced}>Search</button>
                <button className="Advance" onClick={changeState}>Basic Search</button>
            </div> 
            : 
            <div>
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
            <button className="Advance" onClick={changeState}>Advanced Search</button>
            </div>}
        
        </div>
    )
}