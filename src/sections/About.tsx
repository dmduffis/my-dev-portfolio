import Skills from './Skills'
import Experience from './Experience'

function About() {
  return (
    <div id='skills' className='flex flex-wrap justify-between'>
      <Skills />
      <Experience />
    </div>
  )
}

export default About