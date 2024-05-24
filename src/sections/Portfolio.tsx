import './portfolio.style.css'
import Project from '../components/Project'
import { data } from '../data/data'
import { ProjectProps } from '../types/ProjectTypes'

function Portfolio() {

  console.log(data)

  return (
    <div className='bg-white rounded-3xl p-2 mt-28'>
      <div className='section-wrapper'>
        <div className="flex flex-wrap">
        {data.map((item: ProjectProps) => {
          return ( 
          <Project
            title={item.title}
            coverImg={item.coverImg}
            description={item.description}
            url={item.url}
            key={item.key}
            />
          )})
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio