import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string;

  constructor(
    public http: HttpClient
  ) {
    this.apiUrl = 'https://node-todos.herokuapp.com/api/todos';
  }

  getTodoList() {
    return this.http.get<Array<Todo>>(this.apiUrl);
  }
}
