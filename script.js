const newToDoBtn = document.querySelector('.newToDoBtn');
const toDoTaskInput = document.querySelector('.toDoInput');
const toDoInputDate = document.querySelector('.toDoInputDate');
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
    const id = crypto.randomUUID();
    const toDo = new NewToDo(id, toDoTaskInput.value, toDoInputDate.value);
})