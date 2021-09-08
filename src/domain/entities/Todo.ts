export default class Todo {
    id: string;
    title: string;
    isDone: boolean;
  
    constructor(id: string, title: string, isDone: boolean){
      this.id = id;
      this.title = title;
      this.isDone = isDone;
    }
  }