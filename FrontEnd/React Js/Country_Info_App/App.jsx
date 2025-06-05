import React, { useState } from 'react'
import Header from './src/components/Header'
import "./App.css";
import SearchBar from './src/components/SearchBar';
import SelectMenu from './src/components/SelectMenu'
import CountriesList from './src/components/CountryList';
import { useState } from 'react';

export const App = () => {
  const [val, setVal] = useState('');

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setVal={setVal}/>
          <SelectMenu />
        </div>
        <CountriesList val={val} />
      </main>
    </>

  )
}
