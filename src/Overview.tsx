import { useParams } from 'react-router-dom'
import Navigation from './sections/Navigation'
import { data } from './data/data'


function Overview() {

const params = useParams();

let { index } = params;

let item = data[index]

  return (
    <>
    <Navigation />
    <div className='w-2/3 mt-48'>
      <h3 className='text-2xl text-purple-300'>Case Study</h3>
      <h1 className='mt-4 text-6xl text-gray-100 font-light'>{item.title}</h1>
    </div>
    <div>
    <img src={item.animation} className='mt-16 rounded-3xl' width={1440} height={700} />
    </div>
    <div>
      <h1 className='mt-16 text-4xl text-gray-100 font-light'><span className='text-purple-300'>Objective:</span> {item.objective}</h1>
    </div>

    <div className='max-lg:mt-12 flex flex-wrap text-gray-100'>
      <div className='flex flex-col justify-center items-left lg:w-1/3'>
      <p className='lg:m-2 text-left text-3xl font-base text-purple-300'>01</p>
        <p className='lg:m-2 text-5xl font-thin'>Define</p>
      </div>
      <div className='mt-8 lg:w-2/3'>
        <p className='lg:m-8 text-lg leading-8 text-gray-400'>{item.define}</p>
      </div>
    </div>

    <div className='max-lg:mt-12 flex flex-wrap text-gray-100'>
      <div className='flex flex-col justify-center items-left lg:w-1/3'>
      <p className='lg:m-2 text-left text-3xl font-base text-purple-300'>02</p>
        <p className='lg:m-2 text-5xl font-thin'>Design</p>
      </div>
      <div className='mt-8 lg:w-2/3'>
        <p className='lg:m-8 text-lg leading-8 text-gray-400'>{item.design}</p>
      </div>
    </div>

    <div className='max-lg:mt-12 flex flex-wrap text-gray-100'>
      <div className='flex flex-col justify-center items-left lg:w-1/3'>
      <p className='lg:m-2 text-left text-3xl font-base text-purple-300'>03</p>
        <p className='lg:m-2 text-5xl font-thin'>Deliver</p>
      </div>
      <div className='mt-8 lg:w-2/3'>
        <p className='lg:m-8 text-lg leading-8 text-gray-400'>{item.deliver}</p>
      </div>
    </div>

    </>
  )
}

export default Overview