
import './contacform.style.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function ContactForm() {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_48ro6b7', 'template_t8qqnpt', form.current, {
        publicKey: 'Z5Do8S4aR2ku52kKz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact_form_wrapper mt-12 mx-10 w-full'>
    <form ref={form} onSubmit={sendEmail} className='contact_form flex flex-col w-full'>
        <input type="text" label="name" placeholder='Name' name='user_name' />
        <input type="email" label="email" placeholder='Email' name='user_email'/>
        <textarea label="message" placeholder='Message' name="message"></textarea>
        <input className='items-center' type="submit" value="Send →"/>
    </form>
</div>
  )
}

export default ContactForm