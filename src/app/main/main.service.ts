import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  get() {
    this.http.get('assets/data.json').subscribe((data) => {
      console.log(data);
    })
  }
}
