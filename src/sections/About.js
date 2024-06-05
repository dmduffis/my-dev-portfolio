import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skills from './Skills';
import Experience from './Experience';
function About() {
    return (_jsxs("div", { id: 'skills', className: 'flex flex-wrap justify-between', children: [_jsx(Skills, {}), _jsx(Experience, {})] }));
}
export default About;
