import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categories } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public constructor(private http: HttpClient) {
  this.getData()
  }

  getData(): Observable<Categories> {
    const url = '/assets/json/data.json';
    return this.http.get<{ categories: Categories }>(url).pipe(
      map(response => response.categories)
    );
  }
}
