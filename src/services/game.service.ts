import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  health = signal(5)
  playAgain$ = new Subject()
  constructor() { 
    effect(() => {
      this.onGetProgressPercent()
    });
  }

  onGetProgressPercent(): number {
    console.log("came",this.health(),(this.health() / 5) * 100);
    
    return (this.health() / 5) * 100;
  }
}
