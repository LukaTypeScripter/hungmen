import { Component, inject } from '@angular/core';
import { InstructionCardComponent } from "./instruction-card/instruction-card.component";
import { cards } from './entites';
import { Cards } from '../../models/cards.interface';
import { NavigateService } from '../../services/navigate.service';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
    selector: 'app-instructions',
    standalone: true,
    templateUrl: './instructions.component.html',
    styleUrl: './instructions.component.scss',
    imports: [InstructionCardComponent, HeaderComponent]
})
export class InstructionsComponent {
  private navigateService = inject(NavigateService)
  cards: Cards[] = cards;

  onNavigate() {
    this.navigateService.navigateTo('/');
  }
}
