import './portfolio.style.css'
import Project from '../components/Project'
import { data } from '../data/data'
import { ProjectProps } from '../types/ProjectTypes'

function Portfolio() {

  console.log(data)

  return (
    <div id='projects' className='bg-white rounded-3xl p-2 mt-20'>
      <div className='section-wrapper'>
        <div className="flex flex-wrap">
        {data.map((item: ProjectProps) => {
          return ( 
          <Project
            title={item.title}
            coverImg={item.coverImg}
            description={item.description}
            key={item.key}
            projectId={item.projectId}
            />
          )})
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio