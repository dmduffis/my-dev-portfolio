import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './contact.style.css';
import contactImage from '../assets/images/hire_me_portrait.png';
import ContactForm from '../components/ContactForm';
function Contact() {
    return (_jsxs("div", { id: 'contact', className: 'flex flex-col my-16 justify-center', children: [_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("div", { className: "w-48 h-48 rounded-full p-2", children: _jsx("img", { src: contactImage }) }), _jsx("h1", { className: 'mt-4 text-gray-100', children: "Hire Me" }), _jsx("h3", { className: 'text-xl text-gray-400 justify-center text-center', children: "Let's collaborate on your next project" })] }), _jsx(ContactForm, {})] }));
}
export default Contact;
