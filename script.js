const newToDoBtn = document.querySelector('.newToDoBtn');
const toDoTaskInput = document.querySelector('.toDoInput');
const toDoInputDate = document.querySelector('.toDoInputDate');
const addBtn = document.querySelector('.addBtn');
const newProjectBtn = document.querySelector('.newProjectBtn');
const projects = document.querySelector('.projects');

let toDo;
let project;

addBtn.addEventListener('click', () => {
    const id = crypto.randomUUID();
    toDo = new NewToDo(id, toDoTaskInput.value, toDoInputDate.value);
    toDoTaskInput.value = '';
    toDoInputDate.value = '';
})
newProjectBtn.addEventListener('click', () => {
    project = new NewProject();
    project.pushToDoInProjectArray(toDo);
    project.createProjectOnScreen(toDo);
    manager.pushProjectInArray(project);
    console.log(project)
    console.log(manager)
    
});