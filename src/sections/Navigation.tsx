import './navigation.style.css'

function Navigation() {
  return (
    <nav className='flex justify-center top-0 left-0 right-0 gap-20 bg-gray-950 text-gray-100 border-b border-gray-800 fixed backdrop-blur-3xl opacity-95'>
        <div id="max" className='flex justify-between w-full px-10'>
              <div className='site-title'>Daniel Duffis</div>
              <div className='navigation-links'>
              
                  <ul>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Resume</li>
                  </ul>
              </div>
        </div>
    </nav>
  )
}

export default Navigation