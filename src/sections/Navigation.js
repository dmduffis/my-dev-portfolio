import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './navigation.style.css';
import { Link } from 'react-router-dom';
import { Link as Anchor } from "react-scroll";
import downloadIcon from '../assets/images/download_icon.png';
import { useEffect, useState } from 'react';
function Navigation() {
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }
        else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);
    const [open, setOpen] = useState(false);
    return (_jsx("div", { className: 'nav-back top-0 left-0 right-0 fixed backdrop-blur-2xl', children: _jsx("nav", { className: 'flex justify-center bg-gray-950 text-gray-100 border-b border-gray-800 opacity-90', children: _jsxs("div", { id: "max", className: 'flex max-md:flex-col max-md:items-start justify-between items-center w-full md:px-10', children: [_jsx(Link, { to: '/', className: 'site-title hover:text-purple-400 max-md:ml-10', children: _jsx("button", { onClick: () => window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            }), children: "Daniel Duffis" }) }), _jsx("div", { id: open ? 'open' : 'hidden', className: 'navigation-links max-md:mt-6 max-md:h-full', children: _jsxs("ul", { className: 'flex max-md:items-start items-center max-md:flex-col max-md:w-full', children: [_jsx(Anchor, { className: 'md:hover:text-purple-400 max-md:hover:bg-purple-900 max-md:w-screen max-md:py-4', activeClass: "text-purple-400", to: "projects", spy: true, smooth: true, offset: -150, duration: 700, children: _jsx("span", { className: 'max-md:ml-10', children: "Projects" }) }), _jsx(Anchor, { className: 'md:hover:text-purple-400 max-md:hover:bg-purple-900 max-md:w-screen max-md:py-4', activeClass: "text-purple-400", to: "skills", spy: true, smooth: true, offset: -100, duration: 700, children: _jsx("span", { className: 'max-md:ml-10', children: "Skills" }) }), _jsx(Anchor, { className: 'hover:text-purple-400 max-md:hover:bg-purple-900 max-md:w-screen max-md:py-4', activeClass: "text-purple-400", to: "contact", spy: true, smooth: true, duration: 700, children: _jsx("span", { className: 'max-md:ml-10', children: "Contact" }) }), _jsx("li", { className: 'max-md:hover:bg-purple-900 max-md:w-screen max-md:py-4', children: _jsxs(Link, { to: "https://www.dropbox.com/scl/fi/qtkdunjjf4btloedir6qv/Daniel-Duffis-Tech-Resume-2024.pdf?rlkey=bqsjud5oxvd3sfbn11q46lp8b&st=v6p0blj0&dl=0", target: '_blank', className: "flex items-center md:mx-2 md:py-2 md:px-4 md:rounded-full text-white  md:bg-gradient-to-r from-purple-600 to-blue-600 transition-all ease-in ease-out", children: [_jsx("span", { className: "md:mx-2 max-md:mr-2 max-md:text-base max-md:ml-10", children: "Resume" }), " ", _jsx("img", { src: downloadIcon, width: 18, height: 18 })] }) })] }) }), _jsx("div", { className: 'md:hidden max-md:absolute max-md:right-8', children: _jsx("button", { onClick: () => setOpen(!open), children: open ?
                                _jsxs("svg", { className: 'pt-1', version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "20px", height: "20px", viewBox: "0 0 256 256", "enable-background": "new 0 0 256 256", xmlSpace: "preserve", children: [_jsx("metadata", { children: " Svg Vector Icons : http://www.onlinewebfonts.com/icon " }), _jsx("g", { children: _jsx("g", { children: _jsx("path", { fill: "#fff", d: "M15.6,20.4l3.7-3.7h-3.7l1.9,1.9l218.9,218.9l1.9,1.9v-3.7l-3.7,3.7h3.7l-1.9-1.9L17.4,18.6l-1.9-1.9V20.4L15.6,20.4z M11.9,16.7L10,18.6l1.9,1.9l1.9,1.9l218.9,218.9l1.9,1.9l1.9,1.9l1.9-1.9l3.7-3.7l1.9-1.9l-1.9-1.9l-1.9-1.9L21.2,14.8L19.3,13l-1.9-1.9L15.6,13L11.9,16.7L11.9,16.7z M236.7,16.7l3.7,3.7v-3.7l-1.9,1.9L19.7,237.4l-1.9,1.9h3.7l-3.7-3.7v3.7l1.9-1.9L238.6,18.6l1.9-1.9L236.7,16.7L236.7,16.7z M240.4,13l-1.9-1.9l-1.9,1.9l-1.9,1.9L15.9,233.7l-1.9,1.9l-1.9,1.9l1.9,1.9l3.7,3.7l1.9,1.9l1.9-1.9l1.9-1.9L242.3,22.3l1.9-1.9l1.9-1.9l-1.9-1.9L240.4,13L240.4,13z" }) }) })] })
                                :
                                    _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: 'white', viewBox: "0 0 50 50", width: "24px", height: "24px", children: _jsx("path", { d: "M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" }) }) }) })] }) }) }));
}
export default Navigation;
