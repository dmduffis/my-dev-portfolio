import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './contacform.style.css';
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
            .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    };
    return (_jsx("div", { className: 'contact_form_wrapper mt-12 mx-10 w-full', children: _jsxs("form", { ref: form, onSubmit: sendEmail, className: 'contact_form flex flex-col w-full', children: [_jsx("input", { type: "text", placeholder: 'Name', name: 'user_name' }), _jsx("input", { type: "email", placeholder: 'Email', name: 'user_email' }), _jsx("textarea", { placeholder: 'Message', name: "message" }), _jsx("input", { className: 'items-center', type: "submit", value: "Submit \u2192" })] }) }));
}
export default ContactForm;
