import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

constructor(private http:HttpClient) { }
url='assets/json/json2.json'
  getData(): Observable<any>{
    return this.http.get(this.url)
  }

  urls='assets/json/json3.json'
  getDatas(): Observable<any>{
    return this.http.get(this.urls)
  }

  urldata='assets/json/json4.json'
  getDataselect(): Observable<any>{
    return this.http.get(this.urldata)
  }

}
