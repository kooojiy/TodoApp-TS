import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";
import "./App.css";


const App: React.FC = () => {
  const[todos, setTodos] = useState<Array<Todo>>([]);

  const toggleTodo: ToggleTodo = selectedTodo =>{
    const newTodos = todos.map(todo =>{
      if(todo === selectedTodo){
        return{...todo, complete: !todo.complete};
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && 
      setTodos([...todos, {text: newTodo, complete: false}]);
  }

  return (
    <React.Fragment>
      <div className="my-todo body">
        <h1>ToDoリスト</h1>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </React.Fragment>
  )
};

export default App;
