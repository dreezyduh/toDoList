import { currentPage, setPage, updatePage } from ".";

export {projectPage};




const projects = document.querySelector('.projects');
const projectsSide = document.querySelector('.projectsSide');
const taskBtn = document.querySelector('.createTask');


function projectPage() {
    projects.textContent = '';
    if (taskBtn.getAttribute('class') !== 'createTask') {
        taskBtn.setAttribute('class', 'createTask');
    }
    setPage('projects');
    updatePage();
}
