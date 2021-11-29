import React from 'react';
// import SearchBar from './components/searchbar';
// import { History } from './components/history';
import { Header } from './components/header';
// import { DBConfig } from './components/DBConfig';
// import { initDB } from 'react-indexed-db';
import SearchBar from './components/search'

// initDB(DBConfig);

export default function App() {

    return (
        <div>
            <Header />
            <SearchBar />
            {/* <SearchBar /> */}
            {/* <History /> */}
        </div>
    )
}