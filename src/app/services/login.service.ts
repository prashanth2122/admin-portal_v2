import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import encode from 'src/app/utils/encode-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASEURL='https://restapi-dev.ddiwork.com'
  constructor(private http: HttpClient) { }

  login(body:JSON){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(`${this.BASEURL}/employee/login`,encode(body),{headers:headers})
  }
}
