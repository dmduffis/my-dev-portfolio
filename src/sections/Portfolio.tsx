import React from 'react'
import './portfolio.style.css'
import Project from '../components/Project'

function Portfolio() {
  return (
    <div>
      <p className='section-title'>Selected Works</p>
      <Project />
    </div>
  )
}

export default Portfolio