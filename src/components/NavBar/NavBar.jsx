import React from 'react';

import {Link} from 'react-router-dom';

const NavBar = ({ authUser, removeAuthUser })=>{

    const handleUserArticles = () => {
        const author = authUser.name;

        console.log(author)

    }

    return(
        <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
            <div className="container">
                <div className="topbar-left">
                    <button className="topbar-toggler">&#9776;</button>
                    <Link className="topbar-brand" to="/">
                        <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo-1.png`} alt="logo" />
                        <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-1.png`} alt="logo" />
                    </Link>
                </div>
    
    
                <div className="topbar-right">
                    <ul className="topbar-nav nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    
                    {
                    authUser &&
                    <li className="nav-item"> 
                        <Link className="nav-link" to="/create/article">Write new article</Link>
                    </li>
                    }
                    {

                    authUser &&
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hey {authUser && authUser.name}! 
                        <i className="fa fa-caret-down"></i>
                        </a>
                        <div className="nav-submenu">
                       
                        <Link onClick={removeAuthUser} className="nav-link" to="/">Logout</Link>
                        </div>
                    </li>
                    }
                    {
                        !authUser &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    }

                    {
                        !authUser &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">SignUp</Link>
                        </li>
                    }

                   
                   
                    </ul>
            </div>
    
        </div>
      </nav>
    );
}

export default NavBar;