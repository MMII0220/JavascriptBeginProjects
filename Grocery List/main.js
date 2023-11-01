window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#userInput');
  const myListTasks = document.querySelector('#groceryItems');
  const eraser = document.querySelector('#eraser');
  input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      const taskText = input.value.trim();
      addTask(taskText);
      input.value = '';
    }
  });

  eraser.addEventListener('click', () => {
    myListTasks.textContent = '';
  });

  function addTask(taskText) {
    if (taskText != '') {
      const taskItem = createElement(taskText);
      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
      myListTasks.appendChild(taskItem);
    }
  }

  function createElement(taskText) {
    const taskItem = document.createElement('div');
    taskItem.textContent = '- ' + taskText;
    return taskItem;
  }
});
