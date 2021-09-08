import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Todo from "../../../domain/entities/Todo"
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"
import TodoService from "../../../domain/usecases/TodoService"

interface CounterState {
    values: Array<Todo>
}
const todoRepo = new TodoRepositoryImpl()
const todoService = new TodoService(todoRepo)
const initialState = { values: [] } as CounterState

const functions = (state,action) =>{
    var newValue = todoService.GetTodos()
    if (action.type == "todos/CreateTodo"){
        newValue = newValue.concat(action.payload)
    }
    else if (action.type == "todos/GetTodos"){
        newValue = todoRepo.GetTodos()
    }
    else if (action.type == "todos/UpdateTodo"){
        for (let i = 0; i < newValue.length; i++){
            if(newValue[i].id === action.payload.id){
              newValue[i] = action.payload
              break;
            }
          }
    }
    else if (action.type == "todos/DeleteTodo"){
        for (let i = 0; i < newValue.length; i++){
            if(newValue[i].id === action.payload.id){
              newValue.splice(i,1);
              break;
            }
          }
    }
    todoService.SetTodo(newValue)
    return newValue
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        CreateTodo: (state,action) => ({
            ...state,
            values: functions(state,action)
        }),
        GetTodos: (state) => ({
            ...state,
            values: functions(state,{type:"todos/GetTodos",payload:[]})
        }),
        UpdateTodo: (state,action) => ({
            ...state,
            values: functions(state,action)
        }),
        DeleteTodo: (state,action) => ({
            ...state,
            values: functions(state,action)
        }),
    },
})

export const { CreateTodo, GetTodos, UpdateTodo, DeleteTodo } = todoSlice.actions
export default todoSlice.reducer
