import { CommonModule } from '@angular/common';
import { Component, computed, effect } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  receivedData = computed(() => this.sharedDataService.data);

  constructor(private sharedDataService: RoomService) {
    effect(() => {
      console.log('Received Data in form page:', this.receivedData());
    });
  }
}
