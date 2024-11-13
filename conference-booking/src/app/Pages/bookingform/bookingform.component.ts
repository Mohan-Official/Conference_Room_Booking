import { Component, computed, effect } from '@angular/core';
import { RoomService } from '../../room.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-bookingform',
  standalone: true,
  imports: [CommonModule,MatIconModule, MatBadgeModule, MatFormFieldModule, MatInputModule, DatepickerComponent, FormComponent],
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {
  receivedData = computed(() => this.sharedDataService.data);
  constructor(private sharedDataService: RoomService) {
    effect(() => {
      console.log('Received Data:', this.receivedData());
    });
  }
}
