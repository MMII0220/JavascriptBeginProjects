window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#userInput');
  const myListTasks = document.querySelector('#groceryItems');
  input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      const taskText = input.value.trim();
      addTask(taskText);
    }
  });

  function addTask(taskText) {
    if (taskText != '') {
      const taskItem = document.createElement('div');
      taskItem.textContent = '- ' + taskText;
      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
      myListTasks.appendChild(taskItem);
      input.value = '';
    }
  }
});
