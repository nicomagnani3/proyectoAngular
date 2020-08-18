import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  
  login(user: any): Observable<any> {
    /* console.log(`${environment.apiUrl}`) */
    return this.http.post(`${environment.apiUrl}/login`, user);
    
  }
  register(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }
  setToken(token: string) {   
    sessionStorage.setItem('token', token);
  }
  getToken() {
    return sessionStorage.getItem('token')
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token y demas datos
  }
  logout(){
    sessionStorage.clear();
  }

}