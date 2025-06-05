import React, { useState } from 'react'
import countriesData from '../../CountriesData';
import CountryCard from './CountryCard';

export default function CountriesList({val}) {




    return (
        <>
            <input className='input-tag' type='text' />
            <div className="countries-container">
                {
                    countriesData.filter(function (data) {
                        return data.name.common.includes(val);
                    }).map(function (data) {
                        return <CountryCard key={data.name.common} name={data.name.common} flag={data.flags.png} population={data.population} region={data.region} capital={data.capital} />
                    })
                }

            </div>
        </>
    )
}

