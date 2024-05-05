import './portfolio.style.css'
import Project from '../components/Project'
import { data } from '../data/data'
import { ProjectProps } from '../types/ProjectTypes'

function Portfolio() {

  console.log(data)

  return (
    <div>
      <p className='section-title'>Selected Works</p>
      <div>
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

  )
}

export default Portfolio