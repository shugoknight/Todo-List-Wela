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
    if (action[1] == "CREATE"){
        newValue = newValue.concat(action[0].payload)
    }
    else if (action[1] == "READ"){
        newValue = todoRepo.GetTodos()
    }
    else if (action[1] == "UPDATE"){
        for (let i = 0; i < newValue.length; i++){
            if(newValue[i].id === action[0].payload.id){
              newValue[i] = action[0].payload
              break;
            }
          }
    }
    else if (action[1] == "DELETE"){
        for (let i = 0; i < newValue.length; i++){
            if(newValue[i].id === action[0].payload.id){
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
        CreateTodo: (state,newValue) => ({
            ...state,
            values: functions(state,[newValue,"CREATE"])
        }),
        GetTodos: (state) => ({
            ...state,
            values: functions(state,[[],"READ"])
        }),
        UpdateTodo: (state,value) => ({
            ...state,
            values: functions(state,[value,"UPDATE"])
        }),
        DeleteTodo: (state,value) => ({
            ...state,
            values: functions(state,[value,"DELETE"])
        }),
    },
})

export const { CreateTodo, GetTodos, UpdateTodo, DeleteTodo } = todoSlice.actions
export default todoSlice.reducer
