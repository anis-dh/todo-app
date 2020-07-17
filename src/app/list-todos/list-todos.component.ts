import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;
  // = [
  //   new Todo(1, 'some desription', false, new Date()),
  //   new Todo(2, 'second desription', false, new Date()),
  //   new Todo(3, 'other desription', false, new Date()),
  // ];

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('username').subscribe(
      Response => {
        // console.log(Response);
        this.todos = Response;
      }
    );
  }

  deleteTodo(id) {
    console.log(id);
    this.todoService.deleteTodo('anis', id).subscribe(
      response => {
        // console.log(response);
        this.message = 'Delete successful !';
        this.refreshTodos();
      }
    );
  }
  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {

    this.router.navigate(['todos', -1]);
  }

}
