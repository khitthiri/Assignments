// HTML DOM elements
const categoryInput = document.getElementById('category');
const taskInput = document.getElementById('task');
const tasksList = document.getElementById('tasks-list');

const tasksByCategory = {};

function addTask() {
    const category = categoryInput.value.trim();
    const task = taskInput.value.trim();

    if (category && task) {
        if (!tasksByCategory[category]) {
            tasksByCategory[category] = [];
        }
        tasksByCategory[category].push(task);
        categoryInput.value = '';
        taskInput.value = '';
        listTasks();
    }
}

function listTasks() {
    tasksList.innerHTML = '';
    for (const category in tasksByCategory) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        categoryDiv.appendChild(categoryHeader);

        tasksByCategory[category].forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';

            const taskSpan = document.createElement('span');
            taskSpan.textContent = task;
            taskDiv.appendChild(taskSpan);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeTask(category, index);
            taskDiv.appendChild(removeButton);

            categoryDiv.appendChild(taskDiv);
        });

        tasksList.appendChild(categoryDiv);
    }
}

function removeTask(category, taskIndex) {
    tasksByCategory[category].splice(taskIndex, 1);

    if (tasksByCategory[category].length === 0) {
        delete tasksByCategory[category];
    }

    listTasks();
}
