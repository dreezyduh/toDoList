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
import square from './images/square.svg'
import remove from './images/trash-2.svg'
export {tasks, getPage, updatePage, setPage};

const addIcon = document.querySelector('.addIcon');
const projectsSide = document.querySelector('.projectsSide');
const taskBtn = document.querySelector('.createTask');
const projects = document.querySelector('.projectsTab');
const doneContainer = document.querySelector('.doneContainer');
const projectsCanvas = document.querySelector('.projects');

addIcon.src = addPic;

projects.addEventListener('click', projectPage);
doneContainer.addEventListener('click', finishedTasksPage)
taskBtn.addEventListener('click', displayForm);

let tasks = [[], []];

let currentPage = 'projects';

function setPage(value) {
    return currentPage = value
}

function getPage() {
    return currentPage;
}

function updatePage() {
    console.log(tasks);
    let pending = null;
    let finished = null;
    let classTag = null;
    projectsCanvas.textContent = '';
    if (currentPage === 'projects') {
        pending = 0;
        finished = 1;
        classTag = 'task';
    } else if(currentPage === 'finished') {
        pending = 1;
        finished = 0;
        classTag = 'task checked';
    }
    for (const task in tasks[pending]) {
        const newTask = document.createElement('div');
        const taskCheck = document.createElement('img');
        const taskRemove = document.createElement('img');
        const nameDescContainer = document.createElement('div');
        const taskName = document.createElement('div')
        const taskDescription = document.createElement('div');
        const taskDue = document.createElement('div');
        const priority = tasks[pending][task].priority;
        
        taskName.textContent = tasks[pending][task].title;
        taskDescription.textContent = tasks[pending][task].description;
        taskDue.textContent = tasks[pending][task].dueDate;

        taskCheck.src = square;
        taskRemove.src = remove;

        newTask.setAttribute('class', classTag);
        newTask.setAttribute('class', `${newTask.getAttribute('class')} ${priority}`)

        taskRemove.addEventListener('click', function() {
            let theTask = tasks[pending].indexOf(tasks[pending][task]);
            console.log(`found it at ${theTask}`)
            newTask.parentNode.removeChild(newTask);
            tasks[pending].splice(theTask, 1);
            updatePage()
        });

        taskCheck.addEventListener('click', function(e) {
            let theTask = tasks[pending].indexOf(tasks[pending][task]);
            // completeTask.checkBtn(newTask);
            newTask.parentNode.removeChild(newTask);
            tasks[finished].push(tasks[pending][theTask]);
            tasks[pending].splice(theTask, 1);
            updatePage()
        });
        
        projectsCanvas.appendChild(newTask);
        newTask.appendChild(taskCheck);
        newTask.appendChild(nameDescContainer);
        nameDescContainer.appendChild(taskName);
        nameDescContainer.appendChild(taskDescription);
        newTask.appendChild(taskDue);
        newTask.appendChild(taskRemove);
        console.log(tasks[pending][task]);
    }
}

class completeTask {
    static checkBtn(taskParent) {
        if (taskParent.getAttribute('class') === 'task checked') {
            taskParent.setAttribute('class', 'task');
            return
        }
        taskParent.setAttribute('class', 'task checked');
    }
}


createLightModeBtn();
