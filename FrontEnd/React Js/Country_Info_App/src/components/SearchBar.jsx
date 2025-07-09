import React from 'react'

function SearchBar({ setVal }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={function (event) {
        setVal(event.target.value.toLowerCase());
      }} type="text" placeholder="Search for a country..." />
    </div>
  )
}

export default SearchBar;