import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { encode, decode } from 'src/app/utils/encode-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASEURL='https://restapi-dev.ddiwork.com'
  constructor(private http: HttpClient,private router: Router ) { }

  login(body:JSON){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.http.post(`${this.BASEURL}/employee/login`,encode(body),{headers:headers}).subscribe((data:any)=>{
      if(data.success){
        let result=JSON.parse(decode(data.result))
        localStorage.setItem("token",result.token)
        this.router.navigate(['/onborading-candidates'])
      }
      
    })
  }
}
