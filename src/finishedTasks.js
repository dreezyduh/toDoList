import { setPage, updatePage } from ".";

export {finishedTasksPage};

const projectsSide = document.querySelector('.projectsSide');
const createTask = document.querySelector('.createTask');
const projects = document.querySelector('.projects');
const finishedProjects = document.createElement('div');


finishedProjects.setAttribute('class', 'finishedProjects');

function finishedTasksPage() {
    if (createTask.getAttribute('class') !== 'createTask hidden') {
        createTask.setAttribute('class', 'createTask hidden');
    }
    setPage('finished');
    updatePage();
}