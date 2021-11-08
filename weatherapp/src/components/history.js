import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';

export function History() {
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
                {history.map((data) => (
                    <button key={data.id}>{data.cityName}</button>
                ))}
            </div>
            : 
            <div><h4> waiting... </h4></div>
            }
        </div>
    )
}