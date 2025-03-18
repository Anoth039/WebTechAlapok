function addTodo() {
    let input = document.getElementById("todo-input");
    let text = input.value.trim();
    if (text === "") return;
    
    let li = document.createElement("li");
    li.textContent = text;
    li.onclick = function () {
        this.classList.toggle("completed");
    };
    
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
}