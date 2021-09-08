import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Todo from "../../../domain/entities/Todo"
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"
import TodoService from "../../../domain/usecases/TodoService"

interface CounterState {
    values: Array<Todo>
}
const initialState = { values: [] } as CounterState
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        CreateTodo: (state,action) => {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoService(todoRepo)
            const result = todoService.CreateTodo(action.payload)
            return {
                ...state,
                values: result
            }
        },
        GetTodos: (state) => {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoService(todoRepo)
            const result = todoService.GetTodos()
            return {
                ...state,
                values: result
            }
        },
        UpdateTodo: (state,action) => {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoService(todoRepo)
            const result = todoService.UpdateTodo(action.payload)
            return {
                ...state,
                values: result
            }
        },
        DeleteTodo: (state,action) => {
            const todoRepo = new TodoRepositoryImpl()
            const todoService = new TodoService(todoRepo)
            const result = todoService.DeleteTodo(action.payload)
            return {
                ...state,
                values: result
            }
        },
    },
})

export const { CreateTodo, GetTodos, UpdateTodo, DeleteTodo } = todoSlice.actions
export default todoSlice.reducer
