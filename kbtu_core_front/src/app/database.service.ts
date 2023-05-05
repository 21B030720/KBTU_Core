import { Injectable } from '@angular/core';
import { Tutorial, Category, Faculty} from './models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  BASE_URL = "http://127.0.0.1:8000";
  constructor(private client: HttpClient) {}
  getTutorials(): Observable<Tutorial[]>{
    return this.client.get<Tutorial[]>(`${this.BASE_URL}/api/tutorial`);
  }
  getTutorial(id: number): Observable<Tutorial[]>{
    return this.client.get<Tutorial[]>(`${this.BASE_URL}/api/tutorial/${id}`);
  }
}
