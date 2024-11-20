import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RoomService } from '../../room.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TimeslotselectorComponent } from '../timeslotselector/timeslotselector.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import Swal from "sweetalert2"
import { SampleblockComponent } from '../sampleblock/sampleblock.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    TimeslotselectorComponent,
    MatCardModule,
    ReactiveFormsModule,
    SampleblockComponent,
    MatDatepickerModule
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  bookingForm: FormGroup;
  receivedData = computed(() => this.sharedDataService.data);
  selectedDate = computed(() => this.sharedDataService.date);
  selectedTimeSlot = computed(() => this.sharedDataService.time);
  
  showCard = false;
  divCount : number = 1;
  BookingName: string = '';
  BookingEmail: string = '';
  BookingReason: string = '';

  notification = {
    content:this.BookingReason,
    name: this.BookingName
  };

  apiUrl = 'http://127.0.0.1:8000/add_notification';

  formattedTimeSlot: string = '';

  ngOnInit(): void {
    
  }

  constructor(
    private sharedDataService: RoomService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.bookingForm = this.fb.group({
      roomName: ['', Validators.required],
      bookingName: ['', Validators.required],
      bookingDate: ['', Validators.required],
      bookingEmail: ['', [Validators.required, Validators.email]],
      bookingReason: ['', Validators.required],
    });

    effect(() => {
      const roomName = this.receivedData()?.[0]?.ConferenceName || '';
      const bookingDate = this.selectedDate() || '';
      
      this.formatTimeSlot();

      this.bookingForm.patchValue({
        roomName,
        bookingDate,
      });
    });
  }

  formatTimeSlot() {
    if (this.selectedTimeSlot() && this.selectedTimeSlot().length >= 2) {
      const start = this.selectedTimeSlot()[0].split(' ')[0]; 
      console.log("start:",start)
      const end = this.selectedTimeSlot()[1].split(' ')[2];   
      console.log("end:",end)
      this.formattedTimeSlot = `${start} - ${end}`;
      console.log("Formatted Time:",this.formattedTimeSlot)
    } else {
      this.formattedTimeSlot = 'No End Time';
    }
  }

submitForm(event: Event): void {
  event.preventDefault();

  if (this.bookingForm.invalid) {
    this.bookingForm.markAllAsTouched();
    return;
  }
  this.showCard = true;
  // alert('hi')
  this.divCount = 2;
}

confirmBooking()
{
  const bookingDetails = {
    roomName: this.bookingForm.value.roomName,
    bookingName: this.bookingForm.value.bookingName,
    bookingDate: this.bookingForm.value.bookingDate,
    bookingEmail: this.bookingForm.value.bookingEmail,
    bookingReason: this.bookingForm.value.bookingReason,
    timeSlot: this.formattedTimeSlot,
  };
  let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

  bookings.push(bookingDetails);

  localStorage.setItem('bookings', JSON.stringify(bookings));
  const numberOfBookings = bookings.length;
  this.sharedDataService.setNotification(numberOfBookings);
  this.showCard = false;
  this.divCount = 3;
  
}

myFilter = (d: Date | null): boolean => {
  const day = (d || new Date()).getDay();
  // Prevent Saturday and Sunday from being selected.
  return day !== 0 && day !== 6;
};

  BackToEdit() {
    this.showCard = false;
    this.divCount = 1;
  }

  onOkClick()
  {
    this.divCount = 1;
    this.http.post(this.apiUrl, this.notification, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN'
      })
    }).subscribe({
      next: (response) => {
        console.log('Notification added successfully', response);
      },
      error: (err) => {
        console.error('Error adding notification', err);
      }
    });

    this.bookingForm.reset();
    // this.bookingForm.value.roomName = ''
    // this.bookingForm.value.bookingDate = ''
  }
}
