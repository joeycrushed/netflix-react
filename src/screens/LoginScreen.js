import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                className="loginScreen__logo"
                alt="" />
            </div>
            <button className="loginScreen__button">Sign In</button>
        </div>
    )
}

/* 41.26 */

export default LoginScreen
