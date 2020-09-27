import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps{
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return(
        <ul>
            {todos.map(todo=> {
                return (<div><TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} /><hr color="#008080" /></div>)
            })}
        </ul>
    )
}