import Todo from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {
    GetTodos(): Array<Todo> {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem("todos")) || []
        }
        else {
            return []
        }
    }
    SetTodo(todo: Array<Todo>): any {
        localStorage.setItem("todos", JSON.stringify(todo))
    }
    
    CreateTodo(value): Array<Todo> {
        const oldValue = this.GetTodos()
        const newValue = oldValue.concat(value)
        this.SetTodo(newValue)
        return newValue
    }
    UpdateTodo(value): Array<Todo> {
        const oldValue = this.GetTodos()
        for (let i = 0; i < oldValue.length; i++){
            if(oldValue[i].id === value.id){
                oldValue[i] = value
              break;
            }
          }
        const newValue = oldValue
        this.SetTodo(newValue)
        return newValue
    }
    DeleteTodo(value): Array<Todo> {
        const oldValue = this.GetTodos()
        for (let i = 0; i < oldValue.length; i++){
            if(oldValue[i].id === value.id){
                oldValue.splice(i,1);
              break;
            }
          }
        const newValue = oldValue
        this.SetTodo(newValue)
        return newValue
    }
}
