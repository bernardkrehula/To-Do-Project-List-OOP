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
const newToDoEditForm = document.querySelector('.newToDoEditForm');
const newToDoEditTaskInput = document.querySelector('.toDoEditInput');
const newToDoEditDateInput = document.querySelector('.toDoInputEditDate');


newProjectBtn.addEventListener('click', () => {
    projectCreator.style.display = 'block';
});
projectAddBtn.addEventListener('click', () => {
    const id = crypto.randomUUID();
    const project = new NewProject(projectInput.value, id);
    manager.pushProjectInArray(project);
    //manager.renderProjects()
    projectInput.value = '';
})

projects.addEventListener('click', (e) => {
    const getId = e.target.closest('li').id;
    const findProject = e.target.closest('li');
    const removeBtn = e.target.closest('button');
    
    if(findProject){
       const activeProject = manager.findClickedProject(getId);
        newToDoTask.innerHTML = '';
   //     activeProject.renderToDos()
       newToDoTask.id = getId;
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
    const id = crypto.randomUUID();
    const isChecked = '';

    const toDo = new NewToDo(id, toDoTaskInput.value, toDoInputDate.value, isChecked);

    //manager.clickedProject...
    project.pushToDoInProjectArray(toDo);
    toDoTaskInput.value = '';
    toDoInputDate.value = '';
    toDo.createNewToDoOnClick();
    newToDoFrom.style.display = 'none';
})
cancelBtn.addEventListener('click', () => {
    newToDoFrom.style.display = 'none';
    toDoTaskInput.value = '';
    toDoInputDate.value = '';
});

newToDoTask.addEventListener('click', (e) => {
    const tasks = e.target.closest('li').id;
    const btn = e.target.closest('button');
    const checkboxInput = e.target.closest('input');

    if(checkboxInput){
        if(checkboxInput.checked){
            project.findToDoInArray(tasks).isChecked = 'checked';
        }
       else {
        project.findToDoInArray(tasks).isChecked = '';
       }
    }
    else
    {
        if(btn.className === 'editBtn'){
            newToDoEditForm.style.display = 'block';

            newToDoEditForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const foundTodDo = project.findToDoInArray(tasks);
                foundTodDo.task = newToDoEditTaskInput.value;
                foundTodDo.date = newToDoEditDateInput.value;
                newToDoTask.innerHTML = '';
                console.log(project.refreshObjectListOnScreen(newToDoTask.id));
             /*    newToDoEditTaskInput.value = '';
                newToDoEditDateInput.value = '', */
                newToDoEditForm.style.display = 'none';
            })
        }
        if(btn.className === 'deleteBtn'){
            project.removeObject(tasks);
            newToDoTask.innerHTML = '';
            project.removeTaskFromScreen();
        }
    }
})
