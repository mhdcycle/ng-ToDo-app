import { Injectable } from '@angular/core';
import { TodoModel } from '../model/Todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todos: TodoModel[];

  constructor() { 
    this.todos=[
      {
        id: "111",
        title: "learn Angular",
        isComplete: true,
        date: new Date()
      },
      {
        id: "222",
        title: "learn React",
        isComplete: true,
        date: new Date()
      },
      {
        id: "333",
        title: "learn html",
        isComplete: false,
        date: new Date()
      }
    ];
  }
  getTodo(){
    return of(this.todos);
  }

  addTodo(todo: TodoModel){
    this.todos.push(todo);
  }
  changeStatus(todo: TodoModel){
    this.todos.map((singleTodo)=>{
      if(singleTodo.id === todo.id){
        todo.isComplete=!todo.isComplete;
      }
    })
  }
  deleteTodo(todo: TodoModel){
    const indexOfTodo= this.todos.findIndex(
      (currentObj)=> currentObj.id === todo.id
    );
    this.todos.splice(indexOfTodo, 1);
  }

}
