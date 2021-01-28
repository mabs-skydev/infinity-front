import React from 'react';
import { logout } from './../../services/userService';

const Navigation = () => {

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className="navigation">
            <h3>Blog</h3>
            <div className="menu">
                <span className="menu__name">
                    John Doe
                </span>
                <button className="menu__logout" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}
 
export default Navigation;