let todos = [];
const todoOl = document.querySelector('#todo-list');
const userInput = document.querySelector('.todo-input');

const storeTodo = str => todos.push(str);

const printTodo = todo => {
    const makeLi = document.createElement('li');
    makeLi.innerText = todo;
    todoOl.appendChild(makeLi);
}

const printTodos = () => {
    for (const todo of todos) {
        printTodo(todo);
    }
}

document.querySelector('#add-todo').addEventListener('click', function() {
    const userInput = document.querySelector('.todo-input');
    storeTodo(userInput.value);
    printTodo(userInput.value)
    userInput.value = '';
})

