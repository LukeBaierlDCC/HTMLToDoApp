// Sample to-do list data (replace with your actual data)
const todoItems = [
  { task: 'AllGitHub' },
  { task: 'ASPNETProjects' },
  { task: 'ForExercise' },
  // Add more tasks here
];

const todoList = document.getElementById('todoList');
const taskSearch = document.getElementById('taskSearch');

// Function to display the to-do list
function displayTodoList(items) {
  todoList.innerHTML = ''; // Clear the current list

  items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.task} (Due: ${item.date})`;
      todoList.appendChild(listItem);
  });
}

// Initialize the to-do list with all items
displayTodoList(todoItems);

// Function to filter the to-do list based on the search input
function filterTodoList() {
  const searchTerm = taskSearch.value.toLowerCase();
  const filteredItems = todoItems.filter(item => {
      return item.task.toLowerCase().includes(searchTerm);
  });
  displayTodoList(filteredItems);
}

// Add an event listener to the search input
taskSearch.addEventListener('input', filterTodoList);
