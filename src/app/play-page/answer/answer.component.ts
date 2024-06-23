import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent implements OnDestroy {

  @Input() word: string | undefined = '';
  @Input() set getSingleWord(val: string) {
    if (val) {
      this.revealLetter(val);
    }
  }

  displayedLetters: Map<string, boolean> = new Map<string, boolean>();



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
    this.word?.toLowerCase().split('').filter(char => char !== ' ').forEach(char => {
      this.displayedLetters.set(char, false);
    });
  }

  revealLetter(selectedLetter: string): void {
    this.word?.split('').forEach(letter => {
      if (letter.toLowerCase() === selectedLetter.toLowerCase()) {
        this.displayedLetters.set(letter.toLowerCase(), true);
      }
    });
  }

  ngOnDestroy(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('randomName');
    }
  }
}
