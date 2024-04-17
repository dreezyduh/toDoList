import { tasks, updatePage } from '.';
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
}

function submitForm() {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const date = document.querySelector('#date').value;
    if (date.length <= 0 || name.length <= 0) {
        return
    }
    dialog.close();
    const task = new Task(name, description, date, priority);
    tasks[0].push(task);
    console.table(tasks);
    updatePage();
}

function displayForm() {
    dialog.show();
    console.table(tasks)
}

function cancelForm() {
    dialog.close();
    console.table(tasks)
}