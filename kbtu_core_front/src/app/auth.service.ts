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
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    // public currentUser: Observable<any>;

    private l = localStorage.getItem('token');
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.onLogin}`,
      });
    BASE_URL = "http://127.0.0.1:8000";

    constructor(private http: HttpClient){
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('token') as string));
    }

    onLogin(obj: any): Observable<any>{
        // localStorage.setItem('token', this.http.post('http://127.0.0.1:8000/api/token/', obj
        return this.http.post('http://127.0.0.1:8000/api/token/', obj);
    }   
        
        
    getTutorials(): Observable<Tutorial[]>{
        // debugger
        return this.http.get<Tutorial[]>(`${this.BASE_URL}/api/tutorial/`, { headers: this.headers});
    }
    getTutorial(id: number): Observable<Tutorial>{
        return this.http.get<Tutorial>(`${this.BASE_URL}/api/tutorial/${id}/`);
    }
    deleteTutorial(id:number){
    }
    filterTutorialByFaculty(id: number): Observable<Tutorial[]>{
        return this.http.get<Tutorial[]>(`${this.BASE_URL}/api/tutorial/filter/${id}`, {headers: this.headers});
    }
    getFaculties(): Observable<Faculty[]>{
        return this.http.get<Faculty[]>(`${this.BASE_URL}/api/faculty/`);
    }
    getToken(){
        return localStorage.getItem('token')
    }

  // constructor() { }


  // private currentUserSubject: BehaviorSubject<Faculty>;
  //   public currentUser: Observable<Faculty>;

  //   constructor(private http: HttpClient) {
  //       this.currentUserSubject = new BehaviorSubject<Faculty>(JSON.parse(
  //           localStorage.getItem('currentUser') as string));
  //       this.currentUser = this.currentUserSubject.asObservable();
  //   }

  //   public get currentUserValue(): Faculty {
  //       return this.currentUserSubject.value ;
  //   }

  //   login(username: string, password: string) {
  //       return this.http.post<any>(`http://127.0.0.1:8000/api/token/`, 
  //       { username, password })
  //           .pipe(map(user => {
  //               localStorage.setItem('currentUser', JSON.stringify(user));
  //               this.currentUserSubject.next(user);
  //               return user;
  //           }));
  //   }

  //   logout() {
  //       localStorage.removeItem('currentUser');
  //       this.currentUserSubject.next({id: 1111, icon:"enable", name: "enable"});
  //   }
}
