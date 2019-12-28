import React from 'react';

import {Link} from 'react-router-dom';

const NavBar = ()=>{
    return(
        <ul>
            <li>
                <Link to="/">Main Page</Link>
            </li>
            <li>
                <Link to="/about">About Page</Link>
            </li>
            <li>
                <Link to="/home">Home Page</Link>
            </li>
        </ul>
    );
}

export default NavBar;