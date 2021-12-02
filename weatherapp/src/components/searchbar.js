import React, { useState } from "react";

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
            sendState(data)
        } catch (error) {
            console.log(error)
        }
    }

    const sendState = (data) => {
        props.onChange(data)
    }
    


    return (
        <div>
            <input 
            placeholder="Search a City"
            value={searchValue}
            name="searchValue"
            type="text"
            onChange={handleChange}
            >  
            </input>
            <button onClick={getGeo}>Search</button>
        </div>
    )
}