import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TASKS } from './data/data';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = TASKS;
  private tasksUrl = 'api/tasks';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]>{
    return this.http.get<any[]>(this.tasksUrl)
      .pipe(
        tap(v => console.log(v))
      );
  }

  updateTask(task): Observable<any>{
    return this.http.put(this.tasksUrl, task, this.httpOptions);
  }

  doDone(task): Observable<any>{
    return this.http.put(this.tasksUrl, task, this.httpOptions);
  }

  addTask(task): Observable<any>{
    return this.http.post(this.tasksUrl, task, this.httpOptions)
      .pipe(
        tap(console.log)
      );
  }
}
