import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewTask } from '../models/new-task.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  // TYPESCRIPT ES LO SUFICIENTEMENTE INTELIGENTE PARA INFERIR LOR RETURN TYPES
  // EN ESTE CASO : IMPORTANTE !!!!!!!!!!!!
  getAllTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  registerNewTask(newTask: NewTask): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`,newTask);
  }

  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${taskId}`);
  }

}
