import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public httpClient: HttpClient) { }

  getUsers(){
  return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }

  getTodos(){
  return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
