import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomePage} from './views/welcome-page/welcome-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PadelFront');
}
