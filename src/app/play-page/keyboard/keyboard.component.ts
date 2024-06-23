import { Component, EventEmitter, Output } from '@angular/core';
import { getAlphabetMap } from '../../../helpers/getAlphabet.function';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent  {
  alphabet = getAlphabetMap()
  @Output() selectedWord = new EventEmitter()
  handleSelect(key:string) {
    this.selectedWord.emit(key)
    this.alphabet.set(key,true) 
  }
}
