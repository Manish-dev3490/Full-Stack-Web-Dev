import React, { useEffect, useState } from 'react';

function HeroSection() {
    const [profile, setprofile] = useState([]);
    const [number,setNumber]=useState(10);

    // This function is used to get data from github Apis
    async function generateProfiles() {
        try {
            const res = await fetch(`https://api.github.com/users?per_page=${number}`);
            const data = await res.json();
            console.log("API Data:", data);
            setprofile(data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    }


    // useEffect hook works in the end of the component rendering
    useEffect(() => {
        generateProfiles();
    }, [number]);

    return (
        <>

            <div className='Hero-section'>

                <div className='search-bar'>
                    <input type="number" placeholder='Enter your count' name="" id="" />
                    <button onClick={function(e){
                        setNumber(e.target.previousElementSibling.value);
                        
                    }}>Search</button>
                </div>

                {/* iterating over the array for getting data */}
                {Array.isArray(profile) && profile.map((card) => (
                    <div className='card-data' key={card.id}>
                        <img src={card.avatar_url} alt={card.login} />
                        <h3>{card.login}</h3>
                        <a href={card.html_url} target='_blank'>Visit Profile</a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HeroSection;
