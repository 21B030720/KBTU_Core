import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Faculty } from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}
  onLogin(obj: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/token/', obj);
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
