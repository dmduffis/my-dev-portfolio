import './aboutme.style.css'
import tailwind from '../assets/images/tailwind-logo.png';
import typescript from '../assets/images/typescript-plain-icon-256x256-ypojgpyj.png';
import reactnative from '../assets/images/react_native_logo.png'
import nextjs from '../assets/images/next-js-icon.png'
import nodejs from '../assets/images/node_icon.png'
import mongodb from '../assets/images/mongodb_icon.png'
import firebase from '../assets/images/firebase_logo.png'
import hygraph from '../assets/images/hygraph-icon.png'

function AboutMe() {
  return (
        <div className='rounded-3xl mt-10'>
        <h1></h1>
          <div className='section-wrapper sm:w-full lg:w-7/12 '>
        <div className='w-full p-10 bg-gray-900 rounded-3xl'>
          <h1 className='section-title text-left text-white'>Jr. Front-End Developer</h1>
          <h3 className='mt-1 text-lg text-left text-gray-400'>I bring over a decade of graphic design experience and expertise into the realm of software engineering. My proficiency lies in front-end development, complemented by a foundational understanding of back-end technologies.</h3>
        
        {/* List of Skills */}
        <div className="flex flex-wrap w-full max-sm:justify-between sm:gap-24 max-md:justify-left md:gap-24 lg:justify-left lg:gap-20">
            <div>
                <h2 className='skills-title mt-8 mb-2  text-left text-white'>Front-End</h2>
                <ul className='text-lg text-gray-200 space-y-4'>
                    <li className='flex gap-4 align-center'><img src={tailwind} width={28} height={28} />Tailwind</li>
                    <li className='flex gap-4 align-center'><img src={typescript} width={28} height={28} />TypeScript</li>
                    <li className='flex gap-4 align-center'><img src={reactnative} width={28} height={28} />ReactJS | Native</li>
                    <li className='flex gap-4 align-center'><img src={nextjs} width={28} height={28} />Next.js</li>
                </ul>
            </div>
            <div>
                <h2 className='skills-title mt-8 mb-2 text-left text-white'>Back-End</h2>
                <ul className='text-lg text-gray-200 space-y-4'>
                    <li className='flex gap-4 align-center'><img src={nodejs} width={28} height={28} />Node.js | Express.js</li>
                    <li className='flex gap-4 align-center'><img src={mongodb} width={28} height={28} />MongoDB (noSQL)</li>
                    <li className='flex gap-4 align-center'><img src={firebase} width={28} height={28} />FireBase (noSQL) </li>
                    <li className='flex gap-4 align-center'><img src={hygraph} width={28} height={28} />Hygraph (GraphQL)</li>
                </ul>
            </div>
            </div>
            </div>
          </div>
        </div>
      )
}

export default AboutMe