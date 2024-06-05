import { jsx as _jsx } from "react/jsx-runtime";
import './portfolio.style.css';
import Project from '../components/Project';
import { data } from '../data/data';
function Portfolio() {
    console.log(data);
    return (_jsx("div", { id: 'projects', className: 'bg-white rounded-3xl p-2 mt-20', children: _jsx("div", { className: 'section-wrapper', children: _jsx("div", { className: "flex flex-wrap", children: data.map((item, index) => {
                    return (_jsx(Project, { title: item.title, coverImg: item.coverImg, git: item.git, description: item.description, index: index }, item.key));
                }) }) }) }));
}
export default Portfolio;
