// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Faculty } from './models';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tutorial, Faculty, Category} from './models';

@Injectable({
  providedIn: 'root'
})
export class ArmanService {

  BASE_URL = "http://127.0.0.1:8000";

  constructor(private http: HttpClient){}

  onLogin(obj: any): Observable<any>{
      // localStorage.setItem('token', this.http.post('http://127.0.0.1:8000/api/token/', obj
      return this.http.post('http://127.0.0.1:8000/api/token/', obj);
  }   
      
      
  getTutorials(): Observable<Tutorial[]>{
      debugger
      return this.http.get<Tutorial[]>(`${this.BASE_URL}/api/tutorial`);
  }
  getTutorial(id: number): Observable<Tutorial>{
      return this.http.get<Tutorial>(`${this.BASE_URL}/api/tutorial/${id}/`);
  }
  deleteTutorial(id:number){
  }
  filterTutorialByFaculty(id: number): Observable<Tutorial[]>{
      return this.http.get<Tutorial[]>(`${this.BASE_URL}/api/tutorial/filter/${id}`, {});
  }
  getFaculties(): Observable<Faculty[]>{
      return this.http.get<Faculty[]>(`${this.BASE_URL}/api/faculty/`);
  }
}
