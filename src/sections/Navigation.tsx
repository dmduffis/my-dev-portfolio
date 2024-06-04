import './navigation.style.css'
import { Link } from 'react-router-dom';
import { Link as Anchor, animateScroll as scroll } from "react-scroll";
import downloadIcon from '../assets/images/download_icon.png';
import { useEffect } from 'react';


function Navigation() {

  useEffect(() => window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
    }))

  return (
    <div className='nav-back top-0 left-0 right-0 fixed backdrop-blur-2xl'>
    <nav className='flex justify-center gap-20 bg-gray-950 text-gray-100 border-b border-gray-800 opacity-90'>
        <div id="max" className='flex justify-between items-center w-full px-10'>
              <Link to='/' className='site-title hover:text-purple-400'>
                <button onClick={() => window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                  })}>Daniel Duffis
                </button>
             </Link>
              <div className='navigation-links max-md:hidden'>
                  <ul className='flex items-center'>
                  <Anchor
                      activeClass="text-purple-400"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={700}> 
                  Projects
                  </Anchor>
                  <Anchor
                      activeClass="text-purple-400"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={700}> 
                  Skills
                  </Anchor>
                  <Anchor
                      activeClass="text-purple-400"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={700}> 
                  Contact
                  </Anchor>
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
  </div>
  )
}

export default Navigation