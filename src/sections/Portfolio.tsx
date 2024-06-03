import './portfolio.style.css'
import Project from '../components/Project'
import { data } from '../data/data'

function Portfolio() {

  console.log(data)

  return (
    <div id='projects' className='bg-white rounded-3xl p-2 mt-20'>
      <div className='section-wrapper'>
        <div className="flex flex-wrap">
        {data.map((item, index:number) => {
          return ( 
          <Project
            title={item.title}
            coverImg={item.coverImg}
            description={item.description}
            key={item.key}
            index={index}
            />
          )})
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio