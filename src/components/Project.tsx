import { Link } from 'react-router-dom';

export default function Project({title, coverImg, description, projectId}) {
  return (
  
// Project Wrapper
    <div className="md:w-1/2 h-full font-gray-900 "> {/*Invisible Wrapper */}
    <div className="flex flex-column h-full m-4">
      <div className="w-full m-3 rounded-2xl ">
        <img className="rounded-xl"src={coverImg} />

{/* Project Description Section */}
        <p className="mt-4 mb-2 mx-2 font-semibold text-xl">{title}</p>
        <p className="mb-4 mx-2 text-l">{description}</p>
        <div className="flex items-center">

{/* Buttons */}

      <button className="flex items-center m-2 mx-2 py-2 px-2 border rounded-full hover:shadow-xl bg-white border-gray-300 text-gray-900 transition-all ease-in ease-out">
          <span className="mx-2">GitHub</span>
          <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
          </svg>
      </button>

      <Link to={`/overview/${projectId}`} className="flex items-center mx-2 py-2 px-4 rounded-full text-white  bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-xl transition-all ease-in ease-out">
        <span className="mx-2">Overview</span>
        <svg fill="none" height="15" width="15" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h48v48h-48z" fill="#fff" fill-opacity=".01"/><g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m41.9999 24h-35.99998"/><path d="m30 12 12 12-12 12"/></g></svg>
      </Link>
      
        </div>
      </div>
    </div>
   </div>
  )
}
