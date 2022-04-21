import LookUp from './LookUp/lookup';
import Saved from './Saved/saved';

import './nav.css'
import React from 'react';

function Nav() {
    return (
        <div className="nav">
            <LookUp />
            <Saved />
        </div>
    );
}

export default Nav