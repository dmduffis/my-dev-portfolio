import { useParams } from 'react-router-dom'
import Navigation from './sections/Navigation'


function Overview() {

const params = useParams();

let { projectId } = params;

  return (
    <>
    <Navigation />
    <div>
      <p className='font-lg mt-48 text-white'>{projectId}</p>
    </div>
    </>
  )
}

export default Overview