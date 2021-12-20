const tasks = document.querySelector("#tasks");
const btn = document.querySelector("#add");
const input = document.querySelector("#newtask input");

// event listeners
add.addEventListener("click", () => {
  if(input.value.length == 0) {
    alert("Please enter a task!")
  }
  else {
    addToDo();
    input.value = "";
  }
})

//functions
function addToDo() {
  const newElement = document.createElement("li");  
  const newItem = document.createTextNode(input.value);  
 
  newElement.appendChild(newItem);
  tasks.appendChild(newElement);
}


