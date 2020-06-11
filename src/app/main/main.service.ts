import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAccountDetail(): Observable<any> {
    return this.http.get('assets/account.json');
  }

  getRecordDetail(): Observable<any> {
    return this.http.get('assets/record.json');
  }
}
