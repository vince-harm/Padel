import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';


@Component({
  selector: 'app-welcome-page',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions
  ],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {

}
