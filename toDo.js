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
        this.projectArray = [];
        this.id = id;
        this.projectName = projectName;
        this.isClicked = false;
    }
    renderProjects(){
        let html = `
        <li id="${this.id}"><p>${this.projectName}</p><button>x</button></li>
        `;
        projects.insertAdjacentHTML('beforeend', html);
    }
    renderToDos(newToDo){
        newToDo.projectArray.forEach(object => {
            let html = `
            <li id="${object.id}"><h3>Title: ${object.title}</h3><h4>Due date: ${object.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" ${object.isChecked} class="checkBoxInput"></li>
            `;
            newToDoTask.insertAdjacentHTML('beforeend', html);
        })
    }
}
class ProjectManager {
    constructor(){
        this.newProjectsArray = [];
    }
    pushProjectInProjectManager(project){
        this.newProjectsArray.push(project);
    }
    findClickedProjectWithId(getId){
        return this.newProjectsArray.find(project => project.id == getId);
    }
    findClickedProjectWithState(){
        return this.newProjectsArray.find(project => project.isClicked == true);
    }
    setProjectIsClickedToFalse(){
        this.newProjectsArray.forEach(project => project.isClicked = false);
    }
    pushToDoInClickedProject(toDo){
        return this.findClickedProjectWithState().projectArray.push(toDo);
    }
    removeClickedProject(getId){
        this.newProjectsArray = this.newProjectsArray.filter(project => project.id != getId)
    }
    findClickedToDo(id){
        return this.findClickedProjectWithState().projectArray.find(toDo => toDo.id == id);
    }
    removeToDo(id){
        return this.findClickedProjectWithState().projectArray = this.findClickedProjectWithState().projectArray.filter(object => object.id != id)
    }
    renderToDoOnScreen(){
        newToDoTask.innerHTML = '';
        this.findClickedProjectWithState().projectArray.forEach(object => {
            this.renderEditFormToDo(object);
        })
    }
    renderEditFormToDo(toDo){
        let html =  toDo.isEdited ? `
        <form id="${toDo.id}"><h3>Title: </h3><input value="${toDo.title}" class='titleInput'><h4>Due date: </h4><input type="date" value="${toDo.date}" class='date'><button class="editBtn" type="submit">Save</button><button class="deleteBtn">delete</button><input type="checkbox" class="checkBoxInput"></form>
        `
        :
        `
        <li id="${toDo.id}"><h3>Title: ${toDo.title}</h3><h4>Due date: ${toDo.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" class="checkBoxInput"></li>
        `;
        newToDoTask.insertAdjacentHTML('beforeend', html);
    }
}
const manager = new ProjectManager();