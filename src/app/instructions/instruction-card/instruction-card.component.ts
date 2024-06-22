import { Component, input } from '@angular/core';
import { Cards } from '../../../models/cards.interface';

@Component({
  selector: 'app-instruction-card',
  standalone: true,
  imports: [],
  templateUrl: './instruction-card.component.html',
  styleUrl: './instruction-card.component.scss'
})
export class InstructionCardComponent {
  card = input<Cards>()
}
