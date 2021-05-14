import React from 'react';
import { Link } from 'react-router-dom';
import style from "../style/nav.module.css"

function Nav(props) {

    const handleLogout = () => {
        localStorage.clear()
        props.setUser(null)
    }

    let buttons;

    if(props.data) {
        buttons = ( 
            <ul className="">
                <li>
                    <Link  to="/" onClick={handleLogout}>Login</Link>
                </li>
            </ul>
        )
    }

    else {
        buttons = (
            <ul className="">
                <li>
                    <Link  to="/login">Login</Link>
                </li>
                <li>
                    <Link  to="/signup">Sign up</Link>
                </li>
            </ul>
        )

    }
    return (
        <nav className={`${style.navContainer}`}>
            <Link  to="/">Home</Link>               
                {buttons }
        </nav>
    );
}

export default Nav;