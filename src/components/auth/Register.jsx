import React from 'react';

const Register = ({registerClicked}) => {
    return (
        <div className="login">
            <h1 className="login__text">Register</h1>
            <p className="login__register">Already have account? <span onClick={() => registerClicked()}>click here.</span></p>
            <form className="form">
                <div className="form__group">
                    <label htmlFor="name" className="form__label">Name</label>
                    <input type="name" name="name" id="name" className="form__input"/>
                </div>
                <div className="form__group">
                    <label htmlFor="email" className="form__label">Email address</label>
                    <input type="email" name="email" id="email" className="form__input"/>
                </div>
                <div className="form__group">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input type="password" name="password" id="password" className="form__input"/>
                </div>
                <button className="form__button">Register</button>
            </form>
        </div>
     );
}
 
export default Register;