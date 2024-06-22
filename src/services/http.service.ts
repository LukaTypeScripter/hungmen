import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categories } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient)

  getData(): Observable<Categories> {
    const url = '/assets/json/data.json';
    return this.http.get<{ categories: Categories }>(url).pipe(
      map(response => response.categories)
    );
  }

  getChoosableCategories() {
    return this.getData().pipe(
      map(categories => Object.keys(categories)) 
    );
  }
}
