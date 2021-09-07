import React from 'react';
import './SignupScreen.css';

function SignupScreen() {
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="text" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignupScreen
