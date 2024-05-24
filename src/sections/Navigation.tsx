import './navigation.style.css'

function Navigation() {
  return (
    <nav className='text-gray-100'>
        <div className='site-title'>Daniel Duffis</div>
        <div className='navigation-links'>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation