import React, {useState} from 'react';
import { loginUser } from '../../services/userService';

const Login = ({registerClicked}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async e => {
        e.preventDefault();
        await loginUser({
            email,
            password
        });

        window.location = "/";
    }

    return (
        <div className="login">
            <h1 className="login__text">Signin</h1>
            <p className="login__register">New user? <span onClick={() => registerClicked()}>click here.</span></p>
            <form className="form" onSubmit={login}>
                <div className="form__group">
                    <label htmlFor="email" className="form__label">Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form__input" 
                        onChange={e => setEmail(e.target.value)}
                        required />
                </div>
                <div className="form__group">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="form__input" 
                        onChange={e => setPassword(e.target.value)}
                        required />
                </div>
                <button className="form__button">Signin</button>
            </form>
        </div>
    );
}
 
export default Login;