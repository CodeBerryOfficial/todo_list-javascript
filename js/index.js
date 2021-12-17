const push = document.querySelector("#push");
const newTaskInput = document.querySelector("#newtask input");
const tasks = document.querySelector("#tasks");

push.addEventListener("click", () => {
    if(newTaskInput.value.length == 0){
        alert("Please Enter a Task")
    }

    else { 
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newTaskInput.value}
                    ${tasks.style.textDecoration = ""}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        tasks.addEventListener("click", () => {
            tasks.style.textDecoration = "line-through";
        })

        const current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
})