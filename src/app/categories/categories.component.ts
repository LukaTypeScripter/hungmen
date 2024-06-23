import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
    imports: [HeaderComponent,CommonModule]
})
export class CategoriesComponent implements OnInit {
  private httpService = inject(HttpService)
  categories$!:Observable<string[]> 
  private router = inject(Router);

  ngOnInit(): void {
      this.categories$ = this.httpService.getChoosableCategories()
  }

  addParams(type:string) {
    this.router.navigate([`/play/${type}`], { queryParams: { id: type }, queryParamsHandling: "merge" });
  }

}
