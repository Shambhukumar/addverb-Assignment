import React from 'react'
import "./header.scss"

const Header = () => {
    return (
        <div className='header'>
            <span className='header-logo'>Flaggy</span>

            <ul className='header-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>

            <div className='header-line'>
                <span className='header-line-1'></span>
                <span className='header-line-2'></span>
                <span className='header-line-3'></span>
            </div>
        </div>
    )
}

export default Header
