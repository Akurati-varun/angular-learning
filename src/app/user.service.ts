import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const Requestheaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }
  getAllUsers():Observable <any> {
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }
  createUser(user:User): Observable<any> {
    return this.http.post<any>('https://reqres.in', JSON.stringify(user), Requestheaders);
  }
  upateUser(user: User): Observable<any> {
    return this.http.put<User>('https://reques.in', JSON.stringify(user), Requestheaders);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>('https://reques.in'+id, Requestheaders);
  }

}
