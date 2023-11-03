window.addEventListener('DOMContentLoaded', () => {
  const myTaskText = document.querySelector('#input'),
    btnToAddTask = document.querySelector('.header_btn-add_task'),
    myList = document.querySelector('#to_do_list');

  btnToAddTask.addEventListener('click', handleAddTask); // for btn

  myTaskText.addEventListener('keydown', handleAddTask); // for enter

  function handleAddTask(event) {
    // after clicking btn or pushing enter add task
    if (
      myTaskText.value.trim() != '' &&
      (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter'))
    ) {
      addTaskList(myTaskText.value);
      myTaskText.value = '';
    }
  }

  function addTaskList(myTaskText) {
    // creating element and adding task there
    const myTask = document.createElement('div');
    const div = document.createElement('div');
    const text = document.createElement('p');
    const deleteButton = document.createElement('button');

    myTask.className = 'item';
    text.textContent = input;
    deleteButton.textContent = 'delete';

    deleteButton.addEventListener('click', () => {
      myList.removeChild(myTask);
    });

    myTask.appendChild(text);
    myTask.appendChild(div);

    myTask.textContent = myTaskText;
    myTask.appendChild(deleteButton);
    myList.appendChild(myTask);
  }
});
