import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="header">
            <Link to={`/`}><h1>Enrique Anaya</h1></Link>
            <ul className="nav-bar">
                <Link to={`/work/`}><li>Work</li></Link>
                <Link to={`/contact/`}><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Menu;