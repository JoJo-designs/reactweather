import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import '../styles/searchbar.css'

export default function History(props) {
    const { getAll } = useIndexedDB('cities')
    const [history, setHistory] = useState('')

    useEffect(() => {
        getAll().then(data => {
            setHistory(data)
        });
    }, []);

    const handleClick = (data) => {
        sendState(data)
    }

    const sendState = (data) => {
        props.onChange(data)
    }
    
    return(
        <div>
            { history ? 
            <div>
                {history.map((data) => (
                    <button className="historyBtns" key={data.id} 
                    onClick={() => handleClick(data)}
                    >{data.cityName}, {data.countryCode}</button>
                ))}
            </div>
            :
            <div><h4> waiting... </h4></div>
            } 
        </div>
    )
}