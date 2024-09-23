
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const ongoingTasksList = document.getElementById('ongoing-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    addTaskBtn.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            addTaskToList(taskValue);
            taskInput.value = '';
        }
    });

    function addTaskToList(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            markTaskAsCompleted(taskItem);
        });

        taskItem.appendChild(completeBtn);
        ongoingTasksList.appendChild(taskItem);
    }


    function markTaskAsCompleted(taskItem) {
        taskItem.classList.add('completed');
        ongoingTasksList.removeChild(taskItem);
        completedTasksList.appendChild(taskItem);
        taskItem.querySelector('button').remove(); // Remove the complete button

        // Display the "Great job!" pop-up
        alert('Great job,keep going!');
    }
});