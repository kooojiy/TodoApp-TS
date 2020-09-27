import React, {ChangeEvent, FormEvent, useState} from "react";

interface AddTodoFormProps{
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const[newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return(
        <form>
            <input type="text" value={newTodo} placeholder="ToDoを入力" onChange={handleChange} />
            <div className="btn">
                <button type="submit" onClick={handleSubmit} >作成する</button>
            </div>
        </form>
    )
}