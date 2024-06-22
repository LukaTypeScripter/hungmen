import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private navigateService = inject(NavigateService)

  onNavigate(type:string) {
    this.navigateService.navigateTo(`/${type}`);
  }
}
