import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  filteredDates: { day: string; weekday: string, month: string }[] = [];
  startIndex = 0;
  visibleDatesCount = 6;
  selectedIndex: number | null = null; // Moved selectedIndex to class property

  constructor(private sharedDataService: RoomService) {}
  
  ngOnInit() {
    this.generateDates();
  }

  generateDates() {
    this.filteredDates = [];
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let currentDate = new Date();
    let daysToShow = 20;

    while (daysToShow > 0) {
      const weekdayIndex = currentDate.getDay();
      if (weekdayIndex !== 0) {
        this.filteredDates.push({
          day: currentDate.getDate().toString().padStart(2, '0'),
          weekday: weekdays[weekdayIndex],
          month: monthNames[currentDate.getMonth()]
        });
        daysToShow--;
      }
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  nextDay() {
    if (this.startIndex + this.visibleDatesCount < this.filteredDates.length) {
      this.startIndex++;
    }
  }

  prevDay() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  get visibleDates() {
    return this.filteredDates.slice(this.startIndex, this.startIndex + this.visibleDatesCount);
  }

  storeDate(date: { day: string; weekday: string; month: string }, i: number) {
    this.selectedIndex = i; // Set selectedIndex on button click
    const selectedDate = `${date.month} ${date.day} - ${date.weekday}`;
    this.sharedDataService.setDate(selectedDate);
  }
}
