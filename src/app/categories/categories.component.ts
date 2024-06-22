import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

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


  ngOnInit(): void {
    console.log("cameeeee")
      this.categories$ = this.httpService.getChoosableCategories()
      this.categories$.subscribe((res) => {
        console.log(res,"121312312313123");
      })
  }
}
