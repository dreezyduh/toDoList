import square from './images/square.svg'
import remove from './images/trash-2.svg'
export {displayForm};


const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('.dialogClose');
const addBtn = document.querySelector('.dialogContinue');
const projectsContainer = document.querySelector('.projects');
closeBtn.addEventListener('click', cancelForm);
addBtn.addEventListener('click', submitForm);

class Task {
    constructor(name, description, date, priority) {
        this.title = name;
        this.description = description;
        this.dueDate = date;
        this.priority = priority;
    }

    createTask() {
        const newTask = document.createElement('div');
        const taskCheck = document.createElement('img');
        const taskRemove = document.createElement('img');
        const taskName = document.createElement('div')
        const taskDescription = document.createElement('div');
        const taskDue = document.createElement('div');
        const priority = this.priority;
        
        taskName.textContent = this.title;
        taskDescription.textContent = this.description;
        taskDue.textContent = this.dueDate;

        taskCheck.src = square;
        taskRemove.src = remove;

        newTask.setAttribute('class', 'task');

        taskRemove.addEventListener('click', function() {
            newTask.parentNode.removeChild(newTask);
        });

        taskCheck.addEventListener('click', function(e) {
            completeTask.checkBtn(newTask);
        });
        
        projectsContainer.appendChild(newTask);
        newTask.appendChild(taskCheck);
        newTask.appendChild(taskName);
        newTask.appendChild(taskDescription);
        newTask.appendChild(taskDue);
        newTask.appendChild(taskRemove);
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

function submitForm() {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('#priority').value;
    const date = document.querySelector('#date').value;
    if (date.length <= 0 || name.length <= 0) {
        return
    }
    dialog.close();
    const task = new Task(name, description, date, priority);
    task.createTask();
}

function displayForm() {
    dialog.show();
}

function cancelForm() {
    dialog.close();
}