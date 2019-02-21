import { Component, OnInit } from '@angular/core';
import { TodoService } from './../services/todo.service';
import { Todo } from './../models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(
    private todoService: TodoService
   ) { }

  text: string;
  isDisplay: boolean;
  isSpecial: boolean;
  isChangeFontSize: boolean;
  currentClass: Object = {};
  userInfo: any = {};
  todoList:  Array<Todo>;
  // toDoSv = TodoService;


  ngOnInit() {
    this.text = 'Hello';
    this.isDisplay = true;
    this.isSpecial = true;
    this.isChangeFontSize = false;

    this.setCurrentClass();
    this.userInfo = {
      username: ''
    };
    // this.todoList = [
    //   'Thực hành, ngClass, ngStyle',
    //   'Thực hành Form'
    // ];
    this.todoService.getTodoList().subscribe(res => {
      this.todoList = res;
    });
  }
  setCurrentClass() {
    this.currentClass = {
      special: true,
      'color-red': true
    };
  }
  register() {
    const info = `
    Thông tin tài khoản: ${this.userInfo.username}, mật khẩu: ${this.userInfo.password}`;

    alert(info);
  }
  // getdatasv() {
  //   return
  // }


}
