import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListconferenecComponent } from '../listconferenec/listconferenec.component';
import { BookingformComponent } from '../bookingform/bookingform.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSlideToggleModule, ListconferenecComponent, BookingformComponent, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
