window.addEventListener("DOMContentLoaded", () => {
  const myTaskText = document.querySelector("#input"),
    btnToAddTask = document.querySelector("#add_item"),
    myList = document.querySelector("#to_do_list");

  btnToAddTask.addEventListener("click", () => {
    const myTask = createElement("div");
    myTask.textContent = myTaskText.value;
    myList.appendChild(myTask);
    console.log(myTask);
  });
});
