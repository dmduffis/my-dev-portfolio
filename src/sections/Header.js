import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './header.style.css';
function Header() {
    return (_jsx("header", { className: 'mt-44 text-gray-100', children: _jsxs("div", { children: [_jsxs("div", { className: 'flex flex-wrap-reverse max-md:gap-4 md:gap-6 justify-center items-center', children: [_jsx("h1", { className: 'text-center', children: "Hi, I'm Daniel" }), _jsx("div", { className: 'mb-5 myicon max-md:h-20 max-md:w-20 md:h-24 md:w-24' })] }), _jsxs("h2", { className: 'm-2 text-center', children: ["I develop and deliver beautiful ", _jsx("span", { className: 'px-2 py-1 rounded-full border-2 border-purple-700', children: "web" }), " and ", _jsx("span", { className: 'px-2 py-1 rounded-full border-2 border-purple-700', children: "mobile" }), " apps"] })] }) }));
}
export default Header;
