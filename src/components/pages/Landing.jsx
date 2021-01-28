import React, { useState } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Landing = () => {

    const [register, setRegister] = useState(false);
    const handleRegisterClicked = () => {
        setRegister(!register);
    }

    return (
    <>
        <div className="landing-page">
            { !register && <Login registerClicked={handleRegisterClicked} /> }
            { register && <Register registerClicked={handleRegisterClicked} /> }
        </div>
    </>
    );
}
 
export default Landing;