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

            <div className="loginScreen__gradient"></div>
            <div className="loginScreen__body">
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen__input">
                    
                </div>
                </>
            </div>
        </div>
    )
}

/* 41.26 */

export default LoginScreen
