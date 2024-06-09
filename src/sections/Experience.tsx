import './experience.style.css'
import downloadIcon from '../assets/images/download_icon.png';
import { Link } from 'react-router-dom';

function Experience() {
  return (
        <div className='mt-16 w-full lg:w-1/2'>
          <div className='section-wrapper h-full w-full'>
        <div className='p-10 bg-gray-900 rounded-3xl lg:ml-4 h-full'>
          <h2 className='section-title text-left text-white'>Experience</h2>
        
        {/* List of experiencies */}
        <ul className='flex flex-col mt-2 gap-y-6'>
        <li className='flex flex-wrap justify-between'>
            <p className='flex flex-col mt-1 text-lg font-semibold text-left text-gray-200'><span>Web Content Specialist</span><span className='font-light text-base'>William Carey International University</span></p>
            <p className='mt-1 text-lg font-light text-left text-gray-200'>2022-2023</p>
        </li>
        <li className='flex flex-wrap justify-between'>
            <p className='flex flex-col mt-1 text-lg font-semibold text-left text-gray-200'><span>Graphic and Web Designer</span><span className='font-light text-base'>Mvizion Design Studio</span></p>
            <p className='mt-1 text-lg font-light text-left text-gray-200'>2017-2022</p>
        </li>
        <li className='flex flex-wrap justify-between'>
            <p className='flex flex-col mt-1 text-lg font-semibold text-left text-gray-200'><span>Editorial and Design Assistant</span><span className='font-light text-base'>Andrews University Press</span></p>
            <p className='mt-1 text-lg font-light text-left text-gray-200'>2014-2016</p>
        </li>
        <li className='flex flex-wrap justify-between'>
            <p className='flex flex-col mt-1 text-lg font-semibold text-left text-gray-200'><span>Graphic and Web Designer</span><span className='font-light text-base'>Andrews Alumni Services</span></p>
            <p className='mt-1 text-lg font-light text-left text-gray-200'>2014-2016</p>
        </li>
        </ul>

        <div className="flex items-center mt-10">
{/* Buttons */}

        <button className="flex items-center mr-2 py-2 px-1 border rounded-full hover:shadow-xl bg-white border-gray-300 text-gray-900 transition-all ease-in ease-out">
            <Link to="https://www.linkedin.com/in/dmduffis/" target='_blank' className="mx-1">LinkedIn</Link>
            <svg className='mr-2' height="20" viewBox="0 0 72 72" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g></svg>
        </button>

        <button className="flex items-center mx-1 py-2 px-4 rounded-full text-white  bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl transition-all ease-in ease-out">
            <Link to="https://www.dropbox.com/scl/fi/qtkdunjjf4btloedir6qv/Daniel-Duffis-Tech-Resume-2024.pdf?rlkey=bqsjud5oxvd3sfbn11q46lp8b&st=v6p0blj0&dl=0" target='_blank' className="mx-1">Resume</Link>
            <img src={downloadIcon} width={16} height={16} />
        </button>
        </div>
            </div>
            </div>
          </div>
      )
}

export default Experience