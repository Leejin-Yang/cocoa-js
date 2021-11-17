/*
    1. 입력 받은 값 리스트에 추가
    2. 체크박스. task. 삭제버튼
    3. 체크 시 취소선
    4. 삭제 기능
*/

const toDoList = document.querySelector(".to_do_list");
const input = document.querySelector(".task_input");
const toDoForm = document.querySelector(".my_form");

function createCheckBox() {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  return checkBox;
}

function createTask(text) {
  const span = document.createElement("span");
  span.innerHTML = text;
  return span;
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  return deleteButton;
}

function deleteToDo(event) {
  const toDo = event.target;
  toDo.parentNode.remove();
}

function addToDo(text) {
  if (text === "") {
    alert("할 일을 정하자!");
    return;
  }

  const li = document.createElement("li");
  const checkBox = createCheckBox();
  const toDo = createTask(text);
  const deleteButton = createDeleteButton();

  toDoList.appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(toDo);
  li.appendChild(deleteButton);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  addToDo(currentValue);
  input.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
