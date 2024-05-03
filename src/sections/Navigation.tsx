import './navigation.style.css'

function Navigation() {
  return (
    <nav>
        <div className='site-title'>Daniel Duffis</div>
        <div className='navigation-links'>
            <ul>
                <li>Portfolio</li>
                <li>About</li>
                <li>Contact</li>
                <li>Download CV</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation