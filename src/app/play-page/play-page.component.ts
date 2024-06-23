import { Component, Injector, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Categories,  CategoryArr } from '../../models/category.interface';
import { HttpService } from '../../services/http.service';
import { PlayHeaderComponent } from "./play-header/play-header.component";
import { AnswerComponent } from "./answer/answer.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { getRandomObjectNameAndStore } from '../../helpers/getRandomObjectNameAndStore.function';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-play-page',
    standalone: true,
    templateUrl: './play-page.component.html',
    styleUrl: './play-page.component.scss',
    imports: [PlayHeaderComponent, AnswerComponent, KeyboardComponent,CommonModule]
})

export class PlayPageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private http = inject(HttpService)

  category$!:Observable<CategoryArr>
  selectedWord: string | undefined = '';

  singleWord = ''
  ngOnInit(): void {
  this.onGetCategory()
  }
  constructor() {
  }
  onGetCategory() {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params) => this.http.onChooseCategory(params.get('id') as keyof Categories).pipe(
        map((res) => {
          const storedName = localStorage.getItem('randomName');
          if (storedName) {
            this.selectedWord = storedName;
          } else {
            const randomName = getRandomObjectNameAndStore(res);
            localStorage.setItem('randomName', randomName || '');
            this.selectedWord = randomName || '';
          }
          return res;
        })
      ))
    );
  }

  onSelectWord(event:any) {
    this.singleWord = event
  }



}
