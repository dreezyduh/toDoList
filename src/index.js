// index.js page to display lists
// Button to add task
// When clicking button get prompted to enter dueDate and a title or list
// After creating the todo make it appear and be able to click the checklist to finish it
// Be able to edit the todo or delete it after creating it
import {displayForm} from './taskForm';
import { createLightModeBtn } from './lightmode';
import { projectPage } from './projects';
import addPic from './images/plus.svg';
import "./style.css";
import { finishedTasksPage } from './finishedTasks';
export {tasks};

const addIcon = document.querySelector('.addIcon');
const projectsContainer = document.querySelector('.projects');
const taskBtn = document.querySelector('.createTask');
const projects = document.querySelector('.projectsTab');
const doneContainer = document.querySelector('.doneContainer');

addIcon.src = addPic;

projects.addEventListener('click', projectPage);
doneContainer.addEventListener('click', finishedTasksPage)
taskBtn.addEventListener('click', displayForm);

let tasks = [];
createLightModeBtn();
