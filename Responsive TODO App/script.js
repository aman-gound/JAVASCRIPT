const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todolists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

function allTask() {
  let task = document.querySelectorAll(".pending");
  pendingNum.textContent = task.length === 0 ? "no" : task.length;
}


inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="list pending" onclick="handleStatus(this)">
      <input type="checkbox">
      <span class="task">${inputVal}</span>
      <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>
     `;
    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = '';
    allTask();
  }
});
function deleteTask(e) {
  e.parentElement.remove();
  allTask();
}


function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle('pending');
  allTask();
}
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = '';
  allTask();
})
