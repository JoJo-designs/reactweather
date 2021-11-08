import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';

export function History(searchCity, setSearchCity) {
    const { getAll } = useIndexedDB('cities');
    const [history, setHistory] = useState('')

    useEffect(() => {
        getAll().then(data => {
            setHistory(data)
            console.log(data)
            console.log(history)
        });
    }, []);
    
    return (
        <div>
            { history ? 
            <div>
                <h4> is history </h4>
                {/* this might help okay!! inguinecode.com/post/get-child-component-state-from-parent-component */}
                {/* loop makes buttons for each element in the database and stores the lat and lon values
                I am hoping that when I make the element clickable that I can use the values to 
                call the data from the api */}
                {history.map((data) => (
                    <button key={data.id} 
                    onClick={setSearchCity(data.lat, data.lon)}>{data.cityName}</button>
                ))}
            </div>
            : 
            <div><h4> waiting... </h4></div>
            }
        </div>
    )
}