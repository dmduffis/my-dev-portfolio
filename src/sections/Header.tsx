import './header.style.css'
import myicon from '../assets/images/my_icon.png'

function Header() {
  return (
    <header className='mt-44 text-gray-100'>
        <div>
               <div className='flex flex-wrap-reverse max-md:gap-4 md:gap-6 justify-center items-center'>
                <h1 className='text-center'>Hi, I'm Daniel</h1>
                <div className='myicon max-md:h-20 max-md:w-20 md:h-24 md:w-24'></div>
                </div>
               <h2 className='m-2 text-center'>I develop and deliver beautiful web and mobile apps</h2>
        </div>
    </header>
  )
}

export default Header