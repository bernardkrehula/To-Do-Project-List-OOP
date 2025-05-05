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
        if(manager.findClickedArray() == undefined){
            alert('Choose project');
        }
        if(manager.findClickedArray().isClicked){
            let foundArray = manager.findClickedArray();
            foundArray.projectArray.push(toDo);
        }  
    }
    removeObject(id){
        return manager.findClickedArray().projectArray = manager.findClickedArray().projectArray.filter(object => object.id != id)
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
    refreshToDo(newToDo){
        newToDo.forEach(object => {
            let html = `
            <li id="${object.id}"><h3>Title: ${object.task}</h3><h4>Due date: ${object.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox" ${object.isChecked}></li>
            `;
            newToDoTask.insertAdjacentHTML('beforeend', html);
        })
    }
    removeTaskFromScreen(){
        this.removeObject().forEach(object => {
            let html = `
            <li id="${object.id}"><h3>Title: ${object.task}</h3><h4>Due date: ${object.date}</h4><button class="editBtn">edit</button><button class="deleteBtn">delete</button><input type="checkbox"></li>
            `;
            newToDoTask.insertAdjacentHTML('beforeend', html);
        })
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
    findClickedProject(getId){
        return this.newProjectsArray.find(project => project.id == getId);
    }
    findClickedArray(){
        return this.newProjectsArray.find(project => project.isClicked == true);
    }
    setProjectIsClickedToFalse(){
        this.newProjectsArray.forEach(project => project.isClicked = false);
    }
    returnProjecManagerArray(){
        console.log(this.newProjectsArray);
    }
    clickedProject(){

    }
    removeClickedProject(getId){
        this.newProjectsArray = this.newProjectsArray.filter(project => project.id != getId)
    }
}
const manager = new ProjectManager();