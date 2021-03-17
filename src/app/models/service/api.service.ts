import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://reqres.in/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getUsers():Observable<Users>{
    return this.httpClient.get(this.apiUrl + `api/users`)
  }

  public deleteUserId(id?: number){
    return this.httpClient.delete(this.apiUrl + `api/users/${id}`)
  }

  public addUser(data:any){
    return this.httpClient.post(this.apiUrl + `api/users`,data,this.httpOptions)
  }

  public editUser(data?:any){
    return this.httpClient.put(this.apiUrl + `api/users/${data.id}`,data,this.httpOptions)
  }
}
