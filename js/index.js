const push = document.querySelector("#push");
const newTaskInput = document.querySelector("#newtask input");
const tasksList = document.querySelector("#tasks");

const createTask = (value, onClick, onDelete) => {
    const task = document.createElement('div');
    task.className = "task";
    task.onclick = () => onClick(task)

    const span = document.createElement('span');
    span.id = "taskname";
    span.innerText = value;

    const button = document.createElement('button');
    button.className = "delete"
    button.onclick = () => onDelete(task);

    const i = document.createElement('i');
    i.classList = ['far fa-trash-alt']
    button.appendChild(i);
    
    task.appendChild(span);
    task.appendChild(button);

    return task;
}

function onClick() {
    const newTaskValue = newTaskInput.value;
    if(newTaskValue.length === 0) {
        alert("Please Enter a Task")
        return;
    }
    const taskOnClick = (task) => task.classList.toggle('completed');
    const taskOnDelete = (task) => tasksList.removeChild(task);

    const newTask = createTask(newTaskValue, taskOnClick, taskOnDelete);
    tasksList.appendChild(newTask);
    newTaskInput.value = "";
}

push.addEventListener("click", onClick)