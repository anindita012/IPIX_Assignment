import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSomething1() {
      return this.http.get('https://api-staging.farstay.in/api/banner/getByName?name=Contact');
  }
  getSomething2() {
    return this.http.get('https://api-staging.farstay.in/api/partner/');
}
public saveUser(user:any): Observable<any> {
  console.log("inside service",user);
  const url = 'https://api-staging.farstay.in/api/contact/';
  return this.http.post<any>(url, user);
}
}
