document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.getElementById("herosection");
  const infoForm = document.getElementById("info-form");

  // Hero section content
  heroSection.innerHTML = `
      <h1>Welcome to Todo App</h1>
      <p>Organize your tasks and boost your productivity</p>
  `;

  // Style hero section
  heroSection.style.textAlign = 'center';
  heroSection.style.padding = '100px 20px';
  heroSection.style.marginBottom = '20px';

  var button=document.querySelectorAll("button.submit-btn");
  // button.forEach(function(button){
  //   button.addEventListener('click',function(){
  //     console.log("submit button is pressed")
  //     })
  // Form handling
  const userForm = document.getElementById('userForm');
  
  userForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const userData = {
          name: document.getElementById('userName').value,
          age: parseInt(document.getElementById('userAge').value),
          school: document.getElementById('userSchool').value
      };

     
      if (!userData.name || !userData.age || !userData.school) {
          alert('Please fill all fields');
          return;
      }

      // Store in localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Show success message
      alert(`Data saved successfully!\nName: ${userData.name}\nAge: ${userData.age}\nSchool: ${userData.school}`);

      // Clear form
      this.reset();
  });

  // Check if there's existing data
  const savedData = localStorage.getItem('userData');
  if (savedData) {
      const data = JSON.parse(savedData);
      document.getElementById('userName').value = data.name;
      document.getElementById('userAge').value = data.age;
      document.getElementById('userSchool').value = data.school;
  }

  const todoInput = document.getElementById('todoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');
  
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  function displayTodos() {
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
          const li = document.createElement('li');
          li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
          
          li.innerHTML = `
              <span>${todo.text}</span>
              <div>
                  <button onclick="toggleTodo(${index})">
                      ${todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onclick="deleteTodo(${index})">Delete</button>
              </div>
          `;
          
          todoList.appendChild(li);
      });
  }

  // Add new todo
  function addTodo(text) {
      if (text.trim()) {
          todos.push({ text, completed: false });
          saveTodos();
          displayTodos();
          todoInput.value = '';
      }
  }

  // Event listeners
  addTodoBtn.addEventListener('click', () => addTodo(todoInput.value));
  
  todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTodo(todoInput.value);
      }
  });

  // Add these functions to window object to make them available for onclick
  window.deleteTodo = function(index) {
      todos.splice(index, 1);
      saveTodos();
      displayTodos();
  };

  window.toggleTodo = function(index) {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      displayTodos();
  };

  // Initial display
  displayTodos();
});