import './nav.css'
import React, { useState } from 'react';
import '../../Assets/background/fug.png';

const BASE_URL = 'https://id.twitch.tv/oauth2/token';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const SECRET = process.env.REACT_APP_SECRET;

function Nav() {

    const [query, setQuery] = useState('');
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${BASE_URL}?client_id=${CLIENT_ID}&client_secret=${SECRET}&grant_type=client_credentials`)
          .then(res => {
            console.log(res);
            res.json();
          })
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