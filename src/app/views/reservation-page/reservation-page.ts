import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PadelService } from '../../services/padel.service';
import { PadelSite, PadelCourt } from '../../shared/site.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {DatePipe} from '@angular/common';
import {PadelCardComponent} from '../padel-card/padel-card';

@Component({
  selector: 'app-reservation-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PadelCardComponent
  ],
  templateUrl: './reservation-page.html'
})
export class ReservationPage implements OnInit {
  private route = inject(ActivatedRoute);
  private padelService = inject(PadelService);

  site = signal<PadelSite | undefined>(undefined);
  selectedCourt = signal<PadelCourt | undefined>(undefined);

  // Signal pour stocker la date sélectionnée (par défaut aujourd'hui)
  selectedDate = signal<Date | null>(new Date());

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.site.set(this.padelService.getSiteById(id));
    }
  }

  selectCourt(court: PadelCourt) {
    this.selectedCourt.set(court);
  }
}
