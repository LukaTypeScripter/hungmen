import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hungmen';
  private httpService = inject(HttpService)

  
}
