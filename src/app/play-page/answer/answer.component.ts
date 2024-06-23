import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent implements OnInit,OnDestroy {
  private cdr = inject(ChangeDetectorRef)
  @Input() word: string | undefined = '';
  @Input() set getSingleWord(val: string) {
    if(val) {
      this.revealLetter(val);
    } else {
      this.word?.toLowerCase()?.split('').filter((char) => char !== ' ').forEach((char) => {
        this.displayedLetters.set(char, false);
      });
    }

  
  }
  displayedLetters: any = new Map<string, boolean>();

  ngOnInit(): void {
  
  }

  revealLetter(selectedLetter: string): void {
    const updatedLetters = new Map<string, boolean>(this.displayedLetters);
    this.word?.split('').forEach((letter) => {
      if (letter.toLowerCase() === selectedLetter.toLowerCase()) {
        updatedLetters.set(letter.toLowerCase(), true);
      }
    });
    this.displayedLetters = updatedLetters;
  }

  ngOnDestroy(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('randomName');
    }
  }
}
