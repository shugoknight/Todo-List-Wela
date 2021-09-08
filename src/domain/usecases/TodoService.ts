import Todo from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export default class TodoServiceImpl {
    todoRepo: TodoRepository

    constructor(td: TodoRepository) {
        this.todoRepo = td
    }
    GetTodos(): Array<Todo> {
        return this.todoRepo.GetTodos()
    }
    SetTodo(todo: Array<Todo>): void {
        return this.todoRepo.SetTodo(todo)
    }
    CreateTodo(todo: Todo): Array<Todo> {
        return this.todoRepo.CreateTodo(todo)
    }
    UpdateTodo(todo: Todo): Array<Todo> {
        return this.todoRepo.UpdateTodo(todo)
    }
    DeleteTodo(todo: Todo): Array<Todo> {
        return this.todoRepo.DeleteTodo(todo)
    }
}
