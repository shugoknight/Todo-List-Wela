import { useState , useEffect } from "react"
import Todo from "domain/entities/Todo"
import { CreateTodo, GetTodos } from "../app/redux/todo/todo.slice"
import TodoList from "./components/TodoList"
import { nanoid } from 'nanoid'
import { useAppDispatch, useAppSelector } from "../app/redux/hooks"

export default function Home() {
    const [sulod, setSulod] = useState("")

    const { values } = useAppSelector((state) => ({
        values: state.todoSlice.values
    }))

    useEffect(() => {
        dispatch(GetTodos())
    },[])

    const dispatch = useAppDispatch()
    const handleAmountChange = (e: any) => {
        setSulod(e.target.value)
    }

    const todoSubmit = () => {
        const newTodo = new Todo(nanoid(),sulod,false)
        dispatch(CreateTodo(newTodo))
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                columnGap: 50,
            }}
        >
            <div>
                <h2>TodoList</h2>
                <div>
                        <input type="string" placeholder="Set Todo" onChange={handleAmountChange} />
                        <button type="button" onClick={todoSubmit}>
                            Create
                        </button>
                </div>
                <table>
                    <tbody>
                        {values.map((item: Todo) => (
                            <TodoList key={item.id} todo={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
