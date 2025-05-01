class NewToDo {
    constructor(id, task, date, isChecked){
        this.id = id;
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
    pushToDoInProjectArray(toDo){
        this.projectArray.push(toDo);
    }
    createProjectOnScreen(){
        let html = `
        <li id="${this.id}"><p>${this.projectName}</p><button>x</button></li>
        `;
        projects.insertAdjacentHTML('beforeend', html);
    }
 
}
class NewProjectManager {
    constructor(){
        this.newProjectsArray = [];
    }
    pushProjectInArray(project){
        this.newProjectsArray.push(project);
    }
    findClickedProject(getId){
        return this.newProjectsArray.find(project => project.id == getId);
    }
    removeClickedProject(getId){
        this.newProjectsArray = this.newProjectsArray.filter(project => project.id != getId)
    }
}
const manager = new NewProjectManager();