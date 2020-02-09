let addBtn = document.getElementsByClassName('btn')[0];
let listItem = document.getElementById('toDoItems');
let userInput = document.getElementById('inputArea');

let arrTask = [];

function renderList() {
  let showTask = arrTask.reduce((accumulator, currentValue) => {
    let customClass = currentValue.completed ? 'finishedItem' : '';

    return (
      accumulator +
      `<li onkeyup="enterKey()" class="listItems task-${currentValue.id} ${customClass}" onclick=completeTask(${currentValue.id})>${currentValue.description} <button class="btnItems" onClick="removeItem(${currentValue.id})">X</button></li>`
    );
  }, '');
  listItem.innerHTML = showTask;
}

function completeTask(id) {
  arrTask.forEach(task => {
    if (task.id === id) {
      task.completed = true;
    }
  });
  renderList();
}

function addTask() {
  let addNewTask = {
    id: Math.random(),
    description: '',
    completed: false
  };

  let inputTask = document.getElementById('inputArea').value;
  if (inputTask === '') {
    return;
  } else {
    addNewTask.description = inputTask;
    arrTask.push(addNewTask);
    renderList();
    let clearInput = document.getElementById('inputArea');
    clearInput.value = '';
    console.log(arrTask);
  }
}

function removeItem(id) {
  let index = arrTask.findIndex(task => task.id === id);
  console.log(index);
  arrTask.splice(index, 1);
  renderList();
}

userInput.addEventListener('keyup', function($event) {
  // $event.keyCode === 13 && addTask();
  if ($event.keyCode === 13 && $event.target.value) {
    addTask();
  }
});

addBtn.addEventListener('click', addTask);
