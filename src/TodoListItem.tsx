import React from "react";


interface TodoListItemProps{
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label>
                <input 
                    type="checkbox" 
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}/>
                {todo.text}           
            </label>
        </li>
    )
};
