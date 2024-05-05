import { ProjectProps } from '../types/ProjectTypes';
import './project.style.css'


const Project = ({title, coverImg, description, url}: ProjectProps) => {
  return (
    <div className="project-wrapper">
        <img className='project-image' src={coverImg} />

        <div className="project-info">
        <p className='project-title'>{title}</p>
        <p className='description'>{description}</p>
        <a href={url}><button className='btn-project'>View Live Demo</button></a>
        </div>
    </div>
  )
}

export default Project