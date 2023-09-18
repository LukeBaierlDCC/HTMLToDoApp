"use strict";

window.onload = function () {
  var savedTasks = localStorage.getItem('tasks');

  if (savedTasks) {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = savedTasks;
    attachDeleteListeners();
  }
};

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  var taskList = document.getElementById('taskList');
  var listItem = document.createElement('li');
  listItem.textContent = taskText;
  var deleteButton = document.createElement('button');
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
  var taskList = document.getElementById('taskList');
  localStorage.setItem('tasks', taskList.innerHTML);
}

function attachDeleteListeners() {
  var deleteButtons = document.querySelectorAll('#taskList li button');
  deleteButtons.forEach(function (button) {
    button.onclick = function () {
      button.parentElement.remove();
      updateLocalStorage();
    };
  });
}

var taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    // 13 is the keycode for the "Enter" key
    addTask();
  }
});
//# sourceMappingURL=AddRemoveTasks.dev.js.map
