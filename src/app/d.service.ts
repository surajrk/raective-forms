import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  a = [];
  b;


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getEnteredUser() {
    return this.a;
  }

  pushData(value) {
    this.a.push(value);
  }

  pushBackData(value) {
    this.b = value;
    console.log(this.b);
  }

  updateForm() {
    return this.b;
  }
}
