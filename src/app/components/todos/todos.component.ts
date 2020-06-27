import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/service/todoservice.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TodoModel } from 'src/app/model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt= faTrashAlt;
  todos: TodoModel[];
  constructor(private todoService: TodoserviceService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(
      (todos)=>{
        this.todos=todos;
      }
    );
  }
  changeTodoStatus(todo: TodoModel){
    this.todoService.changeStatus(todo);
  }
  deleteTodoList(todo: TodoModel){
    this.todoService.deleteTodo(todo);
  }

}
