const newToDoBtn = document.querySelector('.newToDoBtn');
const toDoTitleInput = document.querySelector('.toDoInput');
const toDoInputDate = document.querySelector('.toDoInputDate');
const cancelBtn = document.querySelector('.cancelBtn');
const newProjectBtn = document.querySelector('.newProjectBtn');
const projects = document.querySelector('.projects');
const projectInput = document.querySelector('.newProject input');
const projectAddBtn = document.querySelector('.projectAddBtn');
const projectCreator = document.querySelector('.projectCreator');
const newToDoTask = document.querySelector('.newToDoTask');
const newToDoFrom = document.querySelector('.newToDoForm');
const newToDoEditTaskInput = document.querySelector('.toDoEditInput');
const newToDoEditDateInput = document.querySelector('.toDoInputEditDate');


newProjectBtn.addEventListener('click', () => {
    projectCreator.style.display = 'block';
});
projectAddBtn.addEventListener('click', () => {
    const id = crypto.randomUUID();
    const project = new NewProject(projectInput.value, id);
    manager.pushProjectInProjectManager(project);
    project.renderProjects();
    projectInput.value = '';
})

projects.addEventListener('click', (e) => {
    const getId = e.target.closest('li').id;
    const findProject = e.target.closest('li');
    const removeBtn = e.target.closest('button');
    
    if(findProject){
        const activeProject = manager.findClickedProjectWithId(getId);
        newToDoTask.innerHTML = '';
        activeProject.renderToDos(activeProject);
        manager.setProjectIsClickedToFalse();
        activeProject.isClicked = true;
    }

    if(removeBtn){
        manager.removeClickedProject(getId);
        projects.removeChild(findProject);
        newToDoTask.innerHTML = '';
    }
});

newToDoBtn.addEventListener('click', () => newToDoFrom.style.display = 'block');

newToDoFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const isChecked = '';

    const toDo = new NewToDo(toDoTitleInput.value, toDoInputDate.value, isChecked, false);

    manager.pushToDoInClickedProject(toDo);
    toDoTitleInput.value = '';
    toDoInputDate.value = '';
    toDo.createNewToDoOnClick();
    newToDoFrom.style.display = 'none';
})
cancelBtn.addEventListener('click', () => {
    newToDoFrom.style.display = 'none';
    toDoTitleInput.value = '';
    toDoInputDate.value = '';
});

newToDoTask.addEventListener('click', (e) => {
    const toDoId = e.target.closest('li').id;
    const btn = e.target.closest('button');
    const checkboxInput = e.target.closest('input');

    if(checkboxInput){
        if(checkboxInput.checked){
            manager.findClickedToDo(toDoId).isChecked = 'checked';
        }
       else {
            manager.findClickedToDo(toDoId).isChecked = '';
       }
    }
    else
    {
        if(btn.className === 'editBtn'){
            const todo = manager.findClickedToDo(toDoId);
            todo.isEdited = true;
            manager.renderToDoOnScreen();
        }
        if(btn.className === 'deleteBtn'){
            manager.removeToDo(toDoId);
            manager.renderToDoOnScreen();
        }
    }
})
newToDoTask.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target.closest('form');
    if (!form) return;

    const toDoId = form.id;
    const todo = manager.findClickedToDo(toDoId);

    const newTitle = form.querySelector('.titleInput').value;
    const newDate = form.querySelector('.date').value;
    const isChecked = form.querySelector('.checkBoxInput').checked;

    todo.title = newTitle;
    todo.date = newDate;
    todo.isChecked = isChecked ? 'checked' : '';
    todo.isEdited = false;
    
    manager.renderToDoOnScreen();
});