import { tasks } from ".";
export {projectPage};


const projects = document.querySelector('.projects');



function projectPage() {
    console.table(tasks)
    projects.textContent = '';
}
