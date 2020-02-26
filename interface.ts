/* function showTodoList(todo: { title: string; text: string }) {
  return todo.title + ': ' + todo.text;
}

const todoList = {
  title: 'A',
  text: 'A for apple'
};

console.log(showTodoList(todoList)); */

// Interface
interface Todo {
  title: string;
  text: string;
}

function showTodoList(todo: Todo) {
  return todo.title + ': ' + todo.text;
}

const todoList = {
  title: 'A',
  text: 'A for apple'
};

console.log(showTodoList(todoList));
