class NewToDo {
    constructor(id, task, date){
        this.id = id;
        this.task = task;
        this.date = date;
    }
}

class NewProject {
    constructor(){
        this.projectArray = [];
    }
    pushToDoInProjectArray(toDo){
        this.projectArray.push(toDo);
    }
    createProjectOnScreen(toDo){
        let html = `
        <li id="${toDo.id}"><p>${toDo.task}</p><button>x</button></li>
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
}
const manager = new NewProjectManager();