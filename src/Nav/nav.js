import './nav.css'
import React, { useState } from 'react';

function Nav() {

    const BASE = ;
    const CLIENT_ID = 'oedbd2ioqzs04nc43hvmkbyhjyy3ri';
    const SECRET = 'f30fon3ca70b8gxftt96xwxwb1c5g4';

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${base}weather?q=${query}&units=metric&APPID=${key}`)
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