import React from 'react'
import "./Banner.css"

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(`This is a description`, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
