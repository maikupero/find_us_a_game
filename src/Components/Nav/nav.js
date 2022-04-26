import './nav.css'
import React, { useState } from 'react';

function Nav() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${CLIENT_ID}&client_secret=${SECRET}&grant_type=client_credentials`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }

    return (
        <div className="lookup">
            <input 
                type="text"
                className="search-bar"
                placeholder="Search for a game..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    );
}

export default Nav