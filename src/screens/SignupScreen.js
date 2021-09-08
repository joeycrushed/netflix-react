import React, { useRef } from 'react';
import { auth } from '../firebase'
import './SignupScreen.css';


function SignupScreen() {
const emailRef = useRef(null);
const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        
    }

    const signIn = (e) => {
        e.preventDefault();
    }


    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="text" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link">Sign Up Now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
