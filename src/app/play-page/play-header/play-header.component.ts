import { Component, EventEmitter, OnInit, Output, effect, inject } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-play-header',
  standalone: true,
  imports: [],
  templateUrl: './play-header.component.html',
  styleUrl: './play-header.component.scss'
})
export class PlayHeaderComponent{
  private gameService = inject(GameService)
  private http = inject(HttpService)
  @Output() openPopup = new EventEmitter()
  public procent = this.gameService.health
  categoryKey = this.http.categoryKey

}
