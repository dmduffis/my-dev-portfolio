import './contact.style.css'
import contactImage from '../assets/images/hire_me_portrait.png'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className='flex flex-col my-16 justify-center'>
    <div className="flex flex-col justify-center items-center">
        <div className="w-48 h-48 rounded-full p-2">
            <img src={contactImage} />
        </div>
    <h1 className='mt-4 text-gray-100'>Hire Me</h1>
    <h3 className='text-2xl text-gray-400'>Let's collaborate on your next project</h3>
    </div>
        <ContactForm />
    </div>
  )
}

export default Contact