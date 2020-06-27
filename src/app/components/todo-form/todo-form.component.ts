import { Component, OnInit } from '@angular/core';
import {v4 as uuid4} from "uuid";
import { TodoserviceService } from 'src/app/service/todoservice.service';
import { TodoModel } from 'src/app/model/Todo';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;
  constructor(private todoService: TodoserviceService) { }
  
  ngOnInit(): void {
  }
  handleAdd(){
    const newTodo: TodoModel={
      id: uuid4(),
      title: this.todoTitle,
      isComplete: false,
      date: new Date()
    }
    this.todoService.addTodo(newTodo);
    this.todoTitle="";
  }

}
