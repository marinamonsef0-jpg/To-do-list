function  addTask() {
            const task = document.getElementById("task").value;
            const container = document.getElementById("tasks");
            container.innerHTML += `
                <p class="baragraph">
                    <label class="task-left">
                        <input type="checkbox" class="task-checkbox">
                        <span class="task-text">${task}</span>
                    </label>
                    <button onclick="removeTask(this)">Remove</button>
                </p>
            `;

        }
   function removeTask(button) {
   button.parentNode.remove();
 }
