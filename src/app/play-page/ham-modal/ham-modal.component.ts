import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-ham-modal',
  standalone: true,
  imports: [],
  templateUrl: './ham-modal.component.html',
  styleUrl: './ham-modal.component.scss'
})
export class HamModalComponent {
  private navigateService = inject(NavigateService)
  private gameService = inject(GameService)
  @Input() type!:string
  @Output() closeHam = new EventEmitter()

  onNavigate(type:string) {
    this.navigateService.navigateTo(`/${type}`);
  }

  onPlayAgain() {
    this.gameService.playAgain$.next(true)
    this.closeHam.emit()
  }

}
