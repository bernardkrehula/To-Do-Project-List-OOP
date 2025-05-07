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
        //Preimenuj u toDos
        this.toDos = [];
        this.id = id;
        this.projectName = projectName;
        this.isClicked = false;
    }
    //Prebaci u projectManager i nazovi appendProject
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
        //Ove metode prebaci u klasu project
    //(Project je manager toDova pa metoda koje se bave toDovima napravi tamo)
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
    addToDo(toDo){
        manager.getActiveProject().toDos.push(toDo);
    }
}
class ProjectManager {
    constructor(){
        this.newProjects = [];
        this.activeProject = [];
        //Napravi novo polje this.activeProject na pocetak = null
    }
    pushProjectInProjectManager(project){
        this.newProjects.push(project);
    }
    //Ova metoda ti je dovoljna da postavis active project
    //Od trenutka kad imas active project u active project guras toDo ili brises
    findProject(getId){
        return this.newProjects.find(project => project.id == getId);
    }
    setActiveProject(foundProject){
        if(this.activeProject.length < 1){
            return this.activeProject.push(foundProject);
        }
    }
    getActiveProject(){
        return this.activeProject[0];
    }
    returnActiveProjects(){
        return this.activeProject;
    }
    removeClickedProject(getId){
        this.newProjects = this.newProjects.filter(project => project.id != getId)
    }
}
const manager = new ProjectManager();