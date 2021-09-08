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
}
