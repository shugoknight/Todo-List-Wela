import Todo from "domain/entities/Todo"
import { useAppDispatch } from "app/redux/hooks";
import { DeleteTodo, UpdateTodo } from "app/redux/todo/todo.slice";
import { useState } from "react";

export default function TodoList ({ todo }) {
    const dispatch = useAppDispatch();

    const [title, setNewTitle] = useState(todo.title);
    const onDeleteClicked = () => {
        dispatch(DeleteTodo(todo))
    }
    const onEdit = (e) => {
        setNewTitle(e.target.value)
        dispatch(UpdateTodo(new Todo(todo.id,e.target.value,todo.isDone)))
    }
    const onCheck = () => {
        dispatch(UpdateTodo(new Todo(todo.id,todo.title,!todo.isDone)))
    }

    return (
        <tr>
            <td>
                <button onClick={onDeleteClicked}>Delete </button>
            </td>
            <td>
                <input type="text" value={title} onChange={ onEdit } ></input>
            </td>
            <td>
                <input type="checkbox" defaultChecked={todo.isDone} onChange={onCheck} ></input>
            </td>
        </tr>
    )
}