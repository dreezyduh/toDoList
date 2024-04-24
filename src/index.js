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

const mainContainer = document.querySelector('.container');
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

let subtasks = [];

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
        newTask.setAttribute('class', `${newTask.getAttribute('class')} ${priority}`);

        newTask.addEventListener('click', function(e) {
            if (e.target === newTask) {
                editTask(tasks[pending][task]);
            }
        });

        taskRemove.addEventListener('click', function() {
            let theTask = tasks[pending].indexOf(tasks[pending][task]);
            newTask.parentNode.removeChild(newTask);
            tasks[pending].splice(theTask, 1);
            updatePage()
        });

        taskCheck.addEventListener('click', function(e) {
            let theTask = tasks[pending].indexOf(tasks[pending][task]);
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

function editTask(task) {
    
    const editBackground = document.createElement('div');
    const editSheet = document.createElement('div');
    const taskNameDesc = document.createElement('div');
    const taskName = document.createElement('input');
    const taskDescription = document.createElement('input');
    const taskDate = document.createElement('input');
    const subTaskContainer = document.createElement('div');
    const subTaskAddContainer = document.createElement('div');
    const subTaskImg = document.createElement('img');
    const subTaskAdd = document.createElement('div');

    editBackground.setAttribute('class', 'taskBackground');
    editSheet.setAttribute('class', 'editSheet');
    taskDate.setAttribute('type', 'date');
    subTaskContainer.setAttribute('class', 'subTaskContainer');
    subTaskAddContainer.setAttribute('class', 'subTaskAddContainer');
    subTaskImg.setAttribute('class', 'subTaskImg');
    subTaskAdd.textContent = 'Add sub-task';

    mainContainer.appendChild(editBackground);
    editBackground.appendChild(editSheet);
    editSheet.appendChild(taskNameDesc);
    taskNameDesc.appendChild(taskName);
    taskNameDesc.appendChild(taskDescription);
    editSheet.appendChild(taskDate);
    editSheet.appendChild(subTaskContainer);
    editSheet.appendChild(subTaskAddContainer);
    subTaskAddContainer.appendChild(subTaskImg);
    subTaskAddContainer.appendChild(subTaskAdd);

    taskName.value = task.title;
    taskDescription.value = task.description;
    taskDate.value = task.dueDate;

    subTaskAddContainer.addEventListener('click', function() {
        addSubtask(editSheet);
    })

    editBackground.addEventListener('click', function(e) {

        if (e.target !== editBackground) {
            return
        }

        addValuesAfterEdit()
        addSubtasksToTasks()
        editBackground.parentNode.removeChild(editBackground);
        updatePage()
    });

    function addValuesAfterEdit() {
        task.title = taskName.value;
        task.description = taskDescription.value;
        task.dueDate = taskDate.value;
    }

    function addSubtasksToTasks() {
        if (subtasks.length !== 0) {
            task.subtasks = subtasks;
        }
        console.log(task);
        subtasks = [];
    }

    function getSubtasksFromTask() {
        if (task.subtasks) {
            subtasks = task.subtasks;
            console.log(subtasks);
        }
    }

    getSubtasksFromTask();
    updateSubTask();
}

function addSubtask(parentContainer) {
    document.querySelector('.subTaskAddContainer').setAttribute('class', 'subTaskAddContainer hidden');
    createDialogForm(parentContainer);
}

function createDialogForm(parentContainer) {
    const dialog = document.createElement('dialog');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const inputName = document.createElement('input');
    const priorityContainer = document.createElement('p');
    const priorityLabel = document.createElement('label');
    const priorityInputLow = document.createElement('input');
    const priorityLowLabel = document.createElement('label');
    const priorityInputMedium = document.createElement('input');
    const priorityMediumLabel = document.createElement('label');
    const priorityInputHigh = document.createElement('input');
    const priorityHighLabel = document.createElement('label');
    const dialogCloseBtn = document.createElement('button');
    const dialogContinueBtn = document.createElement('button');

    form.setAttribute('method', 'dialog');
    nameLabel.setAttribute('for', 'name edit');
    inputName.setAttribute('id', 'name edit');
    priorityLabel.setAttribute('for', 'priority edit');
    priorityInputLow.setAttribute('type', 'radio');
    priorityInputLow.setAttribute('id', 'low edit');
    priorityInputLow.setAttribute('name', 'priority edit');
    priorityInputLow.setAttribute('value', 'low');
    priorityInputLow.setAttribute('class', 'priority edit');
    priorityInputLow.setAttribute('checked', '');
    priorityLowLabel.setAttribute('for', 'low edit');
    priorityInputMedium.setAttribute('type', 'radio');
    priorityInputMedium.setAttribute('id', 'medium edit');
    priorityInputMedium.setAttribute('name', 'priority edit');
    priorityInputMedium.setAttribute('value', 'medium');
    priorityInputMedium.setAttribute('class', 'priority edit');
    priorityMediumLabel.setAttribute('for', 'medium edit');
    priorityInputHigh.setAttribute('type', 'radio');
    priorityInputHigh.setAttribute('id', 'high edit');
    priorityInputHigh.setAttribute('name', 'priority edit');
    priorityInputHigh.setAttribute('value', 'high');
    priorityInputHigh.setAttribute('class', 'priority edit');
    priorityHighLabel.setAttribute('for', 'high edit');
    dialogContinueBtn.setAttribute('type', 'button');
    dialogCloseBtn.setAttribute('type', 'button');

    legend.textContent = 'New task';
    nameLabel.textContent = 'Name: ';
    priorityLabel.textContent = 'Priority: ';
    priorityLowLabel.textContent = "Low";
    priorityMediumLabel.textContent = 'Medium';
    priorityHighLabel.textContent = 'High';
    dialogCloseBtn.textContent ='Close';
    dialogContinueBtn.textContent = 'Add';

    parentContainer.appendChild(dialog);
    dialog.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(form);
    form.appendChild(nameLabel);
    form.appendChild(inputName);
    form.appendChild(priorityContainer);
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInputLow);
    priorityContainer.appendChild(priorityLowLabel);
    priorityContainer.appendChild(priorityInputMedium);
    priorityContainer.appendChild(priorityMediumLabel);
    priorityContainer.appendChild(priorityInputHigh);
    priorityContainer.appendChild(priorityHighLabel);
    form.appendChild(dialogCloseBtn);
    form.appendChild(dialogContinueBtn);

    dialogCloseBtn.addEventListener('click', function() {
        closeDialog();
    });

    dialogContinueBtn.addEventListener('click', function() {
        if (inputName.value.length <= 0) {
            return;
        }
        document.querySelector('.subTaskAddContainer').setAttribute('class', 'subTaskAddContainer');
        const subtaskValue = {name: inputName.value, priority: document.querySelector('input[name="priority edit"]:checked').value, checked: 'no'};
        subtasks[subtasks.length] = subtaskValue;
        console.log(subtasks);
        updateSubTask();
        dialog.parentNode.removeChild(dialog);
    });

    function closeDialog() {
        dialog.parentNode.removeChild(dialog);
        document.querySelector('.subTaskAddContainer').setAttribute('class', 'subTaskAddContainer');
    }
    
    dialog.show();
}

function updateSubTask() {
    document.querySelector('.subTaskContainer').textContent = '';
    for (const sub in subtasks) {
        const task = document.createElement('div');
        const taskCheck = document.createElement('img');
        const title = document.createElement('div');
        const taskRemove = document.createElement('img');

        if (subtasks[sub].checked === 'no') {
            task.setAttribute('class', 'subtask');
        } else {
            task.setAttribute('class', 'subtask checked');
        }

        taskCheck.src = square;
        taskRemove.src = remove;

        title.textContent = subtasks[sub].name;

        if (subtasks[sub].priority === 'low') {
            task.style.backgroundColor = 'rgba(0, 255, 0, 0.137)';
        } else if (subtasks[sub].priority === 'medium') {
            task.style.backgroundColor = 'rgba(255, 255, 0, 0.137)';
        } else if (subtasks[sub].priority === 'high') {
            task.style.backgroundColor = 'rgba(255, 0, 0, 0.137)';
        }

        document.querySelector('.subTaskContainer').appendChild(task);
        task.appendChild(taskCheck);
        task.appendChild(title);
        task.appendChild(taskRemove);

        taskCheck.addEventListener('click', function() {
            if (task.getAttribute('class') !== 'subtask checked') {
                task.setAttribute('class', 'subtask checked');
                subtasks[sub].checked = 'yes';
                return
            }
            task.setAttribute('class', 'subtask');
            subtasks[sub].checked = 'no';
        });

        taskRemove.addEventListener('click', function() {
            task.parentNode.removeChild(task);
            subtasks.splice(sub, 1);
            updatePage()
        });
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
