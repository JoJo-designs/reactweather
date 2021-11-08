import React from 'react';
import SearchBar from './components/searchbar';
import { DBConfig } from './components/DBConfig';
import { IndexedDB } from 'react-indexed-db'
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

export default function App() {

    return (
        <div>
            <SearchBar />
        </div>
    )
}