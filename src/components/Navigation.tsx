import React from 'react'
import './navigation.style.css'
import '../assets/fonts/fonts.css'

function Navigation() {
  return (
    <nav className='top-navigation'>
        <div className='site-title'>Daniel Duffis</div>
        <div className='navigation-links'>
            <ul>
                <li>Projects</li>
                <li>Technologies</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation