import Todo from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Array<Todo>
    SetTodo(todo: Array<Todo>): void
    CreateTodo(todo: Todo): Array<Todo>
    UpdateTodo(todo: Todo): Array<Todo> 
    DeleteTodo(todo: Todo): Array<Todo>
}
