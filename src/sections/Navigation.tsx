import './navigation.style.css'
import downloadIcon from '../assets/images/download_icon.png';

function Navigation() {
  return (
    <nav className='flex justify-center top-0 left-0 right-0 gap-20 bg-gray-950 text-gray-100 border-b border-gray-800 fixed backdrop-blur-3xl opacity-95'>
        <div id="max" className='flex justify-between items-center w-full px-10'>
              <div className='site-title'>Daniel Duffis</div>
              <div className='navigation-links max-md:hidden'>
                  <ul className='flex items-center'>
                      <li>About</li>
                      <li>Contact</li>
                      <li>
                        <button className="flex items-center mx-2 py-2 px-4 rounded-full text-white  bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl transition-all ease-in ease-out">
                        <span className="mx-2">Resume</span> <img src={downloadIcon} width={18} height={18} />
                      </button>
                    </li>
                  </ul>
              </div>
              <div className='md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 50 50" width="24px" height="24px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/></svg>
                </div>
        </div>
    </nav>
  )
}

export default Navigation