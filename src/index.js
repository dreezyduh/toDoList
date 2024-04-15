// index.js page to display lists
// Button to add task
// When clicking button get prompted to enter dueDate and a title or list
// After creating the todo make it appear and be able to click the checklist to finish it
// Be able to edit the todo or delete it after creating it
import {displayForm} from './taskForm';
import { createLightModeBtn } from './lightmode';
import addPic from './images/plus.svg';
import "./style.css";

const addIcon = document.querySelector('.addIcon');
const projectsContainer = document.querySelector('.projects');
const taskBtn = document.querySelector('.createTask');

addIcon.src = addPic;

taskBtn.addEventListener('click', displayForm);

createLightModeBtn();
