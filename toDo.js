class NewToDo {
    constructor(title, date, isChecked, isEdited){
        this.id = crypto.randomUUID();
        this.title = title;
        this.date = date;
        this.isChecked = isChecked;
        this.isEdited = isEdited;
    }
    createNewToDoOnClick(){
        let html = `
        <li id="${this.id}"><h3>Title: ${this.title}</h3><h4>Due date: ${this.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" class="checkBoxInput"></li>
        `;
        newToDoTask.insertAdjacentHTML('beforeend', html);
    }
}

class NewProject {
    constructor(projectName, id){
        this.toDos = [];
        this.id = id;
        this.projectName = projectName;
        this.isClicked = false;
    }
    addToDo(toDo){
        manager.getActiveProject().toDos.push(toDo);
    }
    findToDo(toDoId){
        return this.toDos.find(toDo => toDo.id == toDoId);
    }
    removeToDo(toDoId){
        return this.toDos = this.toDos.filter(toDo => toDo.id != toDoId);
    }
    renderToDos(){
        newToDoTask.innerHTML = '';
        this.toDos.forEach(toDo => {
            this.renderEditFormToDo(toDo);
        })
    }
    renderEditFormToDo(toDo){
        let html =  toDo.isEdited ? `
        <form id="${toDo.id}"><h3>Title: </h3><input value="${toDo.title}" class='titleInput'><h4>Due date: </h4><input type="date" value="${toDo.date}" class='date'><button class="editBtn" type="submit">Save</button><button class="deleteBtn">delete</button><input type="checkbox" class="checkBoxInput" ${toDo.isChecked}></form>
        `
        :
        `
        <li id="${toDo.id}"><h3>Title: ${toDo.title}</h3><h4>Due date: ${toDo.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" class="checkBoxInput" ${toDo.isChecked}></li>
        `;
        newToDoTask.insertAdjacentHTML('beforeend', html);
    }
}
class ProjectManager {
    constructor(){
        this.newProjects = [];
        this.activeProject = null;
    }
    pushProjectInProjectManager(project){
        this.newProjects.push(project);
    }
    renderProjects(project){
        let html = `
        <li id="${project.id}"><p>${project.projectName}</p><button>x</button></li>
        `;
        projects.insertAdjacentHTML('beforeend', html);
    }
    findProject(getId){
        return this.newProjects.find(project => project.id == getId);
    }
    setActiveProject(foundProject){
        this.activeProject = foundProject;
    }
    getActiveProject(){
        return this.activeProject;
    }
    removeClickedProject(getId){
        this.newProjects = this.newProjects.filter(project => project.id != getId)
    }
}
const manager = new ProjectManager();