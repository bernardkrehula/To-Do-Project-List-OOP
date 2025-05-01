const newToDoBtn = document.querySelector('.newToDoBtn');
const toDoTaskInput = document.querySelector('.toDoInput');
const toDoInputDate = document.querySelector('.toDoInputDate');
const cancelBtn = document.querySelector('.cancelBtn');
const newProjectBtn = document.querySelector('.newProjectBtn');
const projects = document.querySelector('.projects');
const projectInput = document.querySelector('.newProject input');
const projectAddBtn = document.querySelector('.projectAddBtn');
const projectCreator = document.querySelector('.projectCreator');
const newToDoTask = document.querySelector('.newToDoTask');
const newToDoFrom = document.querySelector('.newToDoForm');

let toDo;
let project;

newProjectBtn.addEventListener('click', () => {
    projectCreator.style.display = 'block';
});
projectAddBtn.addEventListener('click', () => {
    const id = crypto.randomUUID();
    project = new NewProject(projectInput.value, id);
    project.pushToDoInProjectArray(toDo);
    project.createProjectOnScreen(toDo);
    manager.pushProjectInArray(project);
})
projects.addEventListener('click', (e) => {
    const getId = e.target.closest('li').id;
    const findProject = e.target.closest('li');
    const removeBtn = e.target.closest('button');
    
    if(findProject){
        manager.findClickedProject(getId)
    }
    if(removeBtn){
        manager.removeClickedProject(getId);
        projects.removeChild(findProject);
    }
})
newToDoBtn.addEventListener('click', () => newToDoFrom.style.display = 'block');

newToDoFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const isChecked = false;

    toDo = new NewToDo(id, toDoTaskInput.value, toDoInputDate.value, isChecked);
    toDoTaskInput.value = '';
    toDoInputDate.value = '';
    toDo.createNewToDoOnClick();
    newToDoFrom.style.display = 'none';
})
cancelBtn.addEventListener('click', () => newToDoFrom.style.display = 'none');