class NewToDo {
    constructor(task, date, isChecked){
        this.id = crypto.randomUUID();
        this.task = task;
        this.date = date;
        this.isChecked = isChecked;
    }
    createNewToDoOnClick(){
        let html = `
        <li id="${this.id}"><h3>Title: ${this.task}</h3><h4>Due date: ${this.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox"></li>
        `;
        newToDoTask.insertAdjacentHTML('beforeend', html);
    }
}

class NewProject {
    constructor(projectName, id){
        this.projectArray = [];
        this.id = id;
        this.projectName = projectName;
        this.isClicked = false;
    }
    findToDoInArray(id){
        return manager.findClickedArray().projectArray.find(object => object.id == id);
    }
    refreshObjectListOnScreen(getId){
        manager.findClickedProject(getId).projectArray.forEach(object => {
            let html = `
            <li id="${object.id}"><h3>Title: ${object.task}</h3><h4>Due date: ${object.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" ${object.isChecked}></li>
            `;
            newToDoTask.insertAdjacentHTML('beforeend', html);
        })
    }
    renderToDos(newToDo){
        newToDo.projectArray.forEach(object => {
            let html = `
            <li id="${object.id}"><h3>Title: ${object.task}</h3><h4>Due date: ${object.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" ${object.isChecked}></li>
            `;
            newToDoTask.insertAdjacentHTML('beforeend', html);
        })
    }
    renderProjects(){
        let html = `
        <li id="${this.id}"><p>${this.projectName}</p><button>x</button></li>
        `;
        projects.insertAdjacentHTML('beforeend', html);
    }
}
class ProjectManager {
    constructor(){
        this.newProjectsArray = [];
        this.clickedProject = null;
    }
    pushProjectInProjectManager(project){
        this.newProjectsArray.push(project);
    }
    //Umjesto ovog napravi setClickedProject
    findClickedProjectWithId(getId){
        return this.newProjectsArray.find(project => project.id == getId);
    }
    findClickedProjectWithState(){
        return this.newProjectsArray.find(project => project.isClicked == true);
    }
    setProjectIsClickedToFalse(){
        this.newProjectsArray.forEach(project => project.isClicked = false);
    }
    returnProjecManagerArray(){
        console.log(this.newProjectsArray);
    }
    pushToDoInClickedProject(toDo){
        return this.findClickedProjectWithState().projectArray.push(toDo);
    }
    removeClickedProject(getId){
        this.newProjectsArray = this.newProjectsArray.filter(project => project.id != getId)
    }
    findClickedToDo(id){
        return this.findClickedProjectWithState().projectArray.find(toDo => toDo.id = id);
    }
    removeToDo(id){
        return this.findClickedProjectWithState().projectArray = this.findClickedProjectWithState().projectArray.filter(object => object.id != id)
    }
    renderTasksOnScreen(){
        this.removeToDo().forEach(object => {
            let html = `
            <li id="${object.id}"><h3>Title: ${object.task}</h3><h4>Due date: ${object.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox"></li>
            `;
            newToDoTask.insertAdjacentHTML('beforeend', html);
        })
    }
}
const manager = new ProjectManager();