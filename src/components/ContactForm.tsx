import React, { useRef, useState } from 'react';
import './contacform.style.css'
import emailjs from '@emailjs/browser';
import { BsArrowRightShort } from "react-icons/bs";


function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs
      .sendForm('service_48ro6b7', 'template_t8qqnpt', form.current!, {
        publicKey: 'CsXMsdDu0HDKS8gE8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setIsLoading(false);
          form.current?.reset();
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitted(false);
          setIsLoading(false);
        },
      );
  };

  return (
    <div className='contact_form_wrapper mt-12 mx-10 w-full'>
    <form ref={form} onSubmit={handleSubmit} className='contact_form flex flex-col w-full'>
        <input className="px-4" type="text"  placeholder='Name' name='user_name' />
        <input className="px-4" type="email" placeholder='Email' name='user_email'/>
        <textarea className="px-4" placeholder='Message' name="message"></textarea>
        <button 
          className={`flex items-center justify-center w-fit py-4 px-6 rounded-full ${
            isLoading ? 'bg-gray-400' : 
            isSubmitted ? 'bg-green-600' : 
            'bg-gradient-to-r from-purple-600 to-blue-600'
          } text-white hover:shadow-xl transition-all ease-in disabled:cursor-not-allowed`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </div>
          ) : (
            isSubmitted ? <span className='text-base md:text-lg'>Sent!</span> : <div className='text-base md:text-lg flex items-center'><span>Submit</span> <BsArrowRightShort className='ml-1 w-6 h-6' width={40} height={40}/></div>
          )}
        </button>
    </form>
</div>
  )
}

export default ContactForm