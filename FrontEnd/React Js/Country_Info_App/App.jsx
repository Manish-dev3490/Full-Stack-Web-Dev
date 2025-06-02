import React from 'react'
import Header from './src/components/Header'
import "./App.css";
import SearchBar from './src/components/SearchBar';
import SelectMenu from './src/components/SelectMenu'
import CountriesList from './src/components/CountryList';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu/>
        </div>
        <CountriesList/>
      </main>
    </>

  )
}
