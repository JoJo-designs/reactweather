import React, { useState } from 'react';
import SearchBar from './searchbar';
import Body from './body';
import History from './history';
// import '../styles/skeleton.css'
import '../styles/style.css'
import '../styles/alignment.css'
import backgroundImg from './images/background.jpg'



export function Header() {

    const [cityData, setCityData] = useState({
        cityName: '',
        lat: '',
        lon: '',
        hasData: false
    })

    function handleUpdate(data) {
        setCityData({cityName: data[0].name, lat: data[0].lat, lon: data[0].lon, hasData: true})
    }

    function UpdateHistory(data) {
        setCityData({cityName: data.cityName, lat: data.lat, lon: data.lon, hasData: true})
    }

    const isData = () => {
        if (cityData.hasData === true) {
            return <Body cityData={cityData}/>
        } else {
            return <h3>No data yet</h3>
        }
    }

    return (

        // style={{ backgroundImage: `url(${backgroundImg})`}}
    <div>
        <h1 className="header">Weather Dashboard</h1>
        
        <div>
            {/* section is around everything */}
        <section className="container">   
            {/* this part is components that take a user input */}
            <div className="oneThrid">
        <SearchBar cityData={cityData} onChange={handleUpdate}/>
        <History cityData={cityData} onChange={UpdateHistory}/>
            </div>

        {/* this part doesn't take user inputs */}
         <div className="twoThrids bg" style={{ backgroundImage: `url(${backgroundImg})`}}>
            {isData()}
        </div>

        </section> 

        </div>
    </div>
    );
};

