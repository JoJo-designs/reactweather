import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import SearchBar from './searchbar';

export function History() {
    const { getAll } = useIndexedDB('cities');
    const [history, setHistory] = useState('')
    const [itemInfo, SetItemInfo] = useState('')
 
    useEffect(() => {
        getAll().then(data => {
            setHistory(data)
        });
    }, []);
    
    const handleclick = (data) => {
        SetItemInfo(data)
        console.log(data)
    }


    return (
        <div>
            <SearchBar itemInfo={itemInfo}/>
            { history ? 
            <div>
                <h4> is history </h4>
                {/* loop makes buttons for each element in the database and stores the lat and lon values
                I am hoping that when I make the element clickable that I can use the values to 
                call the data from the api */}
                {history.map((data) => (
                    <button key={data.id}
                    onClick={() => handleclick(data)}
                    >{data.cityName}</button>
                ))}
            </div>
            : 
            <div><h4> waiting... </h4></div>
            }
        </div>
    )
}