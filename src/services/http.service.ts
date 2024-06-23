import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Categories, CategoryArr } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient)
  categoryKey = signal('')
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

  onChooseCategory(categoryKey: keyof Categories): Observable<CategoryArr> {
    this.categoryKey.set(categoryKey)
    return this.getData().pipe(
      map(res => res[categoryKey] || []),
      catchError(error => {
        console.error('Error fetching category data:', error);
        return of([]); 
      })
    );
  }
}
