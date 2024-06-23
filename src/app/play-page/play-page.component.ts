import { Component, Injector, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, takeUntil } from 'rxjs';
import { Categories,  CategoryArr } from '../../models/category.interface';
import { HttpService } from '../../services/http.service';
import { PlayHeaderComponent } from "./play-header/play-header.component";
import { AnswerComponent } from "./answer/answer.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { getRandomObjectNameAndStore } from '../../helpers/getRandomObjectNameAndStore.function';
import { CommonModule } from '@angular/common';
import { HamModalComponent } from "./ham-modal/ham-modal.component";
import { GameService } from '../../services/game.service';
import { unsub } from '../../unsub.class';

@Component({
    selector: 'app-play-page',
    standalone: true,
    templateUrl: './play-page.component.html',
    styleUrl: './play-page.component.scss',
    imports: [PlayHeaderComponent, AnswerComponent, KeyboardComponent, CommonModule, HamModalComponent]
})

export class PlayPageComponent extends unsub implements OnInit,OnDestroy {
  private route = inject(ActivatedRoute)
  private http = inject(HttpService)
  private gameService = inject(GameService)
  category$!:Observable<CategoryArr>
  $$selectedWord$$:WritableSignal<string | undefined>  = signal('');
  $$singleWord$$ = signal('')
  $$isHamOpen$$ = signal(false)
  health = this.gameService.health
  ngOnInit(): void {
  this.onGetCategory()
  this.gameService.playAgain$.pipe(map(() => {
    localStorage.removeItem('randomName');
    this.onGetCategory()
    this.gameService.health.set(6)
  }),takeUntil(this.unsubscribe$)).subscribe()
  }

  onGetCategory() {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params) => this.http.onChooseCategory(params.get('id') as keyof Categories).pipe(
        map((res) => {
          const storedName = localStorage.getItem('randomName');
          if (storedName) {
            this.$$selectedWord$$.set(storedName)
          } else {
            const randomName = getRandomObjectNameAndStore(res);
            localStorage.setItem('randomName', randomName || '');
            this.$$selectedWord$$.set(randomName) 
          }
          return res;
        })
      ))
    );
  }

  onSelectWord(event:any) {
    this.$$singleWord$$.set(event)
  }

  override ngOnDestroy(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('randomName');
    }
    this.onGetCategory()
    this.gameService.health.set(6)
  }

}
