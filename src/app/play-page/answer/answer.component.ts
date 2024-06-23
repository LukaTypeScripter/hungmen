import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, SimpleChanges, inject } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent implements OnDestroy {
  private gameService = inject(GameService)
  @Input() word: string | undefined = '';
  @Input() set getSingleWord(val: string) {
    if (val) {
      this.revealLetter(val);
    }
  }

  displayedLetters: Map<string, { revealed: boolean, character: string }> = new Map<string, { revealed: boolean, character: string }>();;



  ngAfterViewInit(): void {
    this.initializeDisplayedLetters();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['word'] && !changes['word'].isFirstChange()) {
      this.initializeDisplayedLetters();
     
      
    }
  }

  initializeDisplayedLetters(): void {
    this.displayedLetters.clear(); 
    this.word?.split('').forEach((letter, index) => {
      this.displayedLetters.set(`${letter.toLowerCase()}_${index}`,  { revealed: false, character: letter });
    })
}

revealLetter(selectedLetter: string): void {
  let isCorrect = false;
  let updated = false;
  this.word?.split('').forEach((letter, index) => {
    if (letter.toLowerCase() === selectedLetter.toLowerCase()) {
      this.displayedLetters.set(`${letter.toLowerCase()}_${index}`, { revealed: true, character: letter });
      isCorrect = true;
      updated = true;
  }
  });

  if (!isCorrect) {
      this.gameService.health.update((i) => i - 1);
  }

  if (updated) {
      let arr = Array.from(this.displayedLetters);
      let allTrue = arr.every(([_, value]) => value);
      
      if(allTrue) {
          this.gameService.userWon.next(true);
      }
  }
}

  ngOnDestroy(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('randomName');
    }
  }
}
