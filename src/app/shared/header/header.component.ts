import { Component, inject, input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private navigateService = inject(NavigateService)
  text = input<string>()
  onNavigate() {
    this.navigateService.navigateTo('/');
  }
}
