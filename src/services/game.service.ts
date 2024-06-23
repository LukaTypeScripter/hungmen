import { Injectable, effect, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  health = signal(5)
  playAgain$ = new Subject()
  userWon = new BehaviorSubject(false)


}
