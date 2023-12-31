window.onload = function () {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = savedTasks;
      attachDeleteListeners();
  }
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') {
      alert('Please enter a task!');
      return;
  }

  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
      taskList.removeChild(listItem);
      updateLocalStorage();
  };
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
  taskInput.value = '';

  updateLocalStorage();
  attachDeleteListeners();
}

function updateLocalStorage() {
  const taskList = document.getElementById('taskList');
  localStorage.setItem('tasks', taskList.innerHTML);
}

function attachDeleteListeners() {
  const deleteButtons = document.querySelectorAll('#taskList li button');
  deleteButtons.forEach((button) => {
      button.onclick = function () {
          button.parentElement.remove();
          updateLocalStorage();
      };
  });
}

const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    // 13 is the keycode for the "Enter" key
    addTask();
  }
});
