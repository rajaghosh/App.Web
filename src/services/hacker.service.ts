import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HackerService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getTotalDataSet(): Observable<any> {
    return this.http.get(`${environment.hackerApi}GetHacketItemList`, { headers: this.headers });
  }
  getDataByPageSize(offset: number): Observable<any> {
    return this.http.get(`${environment.hackerApi}GetHackerItemList/` + offset, { headers: this.headers });
  }
}
