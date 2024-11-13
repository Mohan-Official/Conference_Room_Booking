import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  filteredDates: { day: string; weekday: string }[] = [];
  startIndex = 0;
  visibleDatesCount = 6;

  ngOnInit() {
    this.generateDates();
  }

  generateDates() {
    this.filteredDates = [];
    const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let currentDate = new Date();
    let daysToShow = 20;

    while (daysToShow > 0) {
      const weekdayIndex = currentDate.getDay();
      if (weekdayIndex !== 0) {
        this.filteredDates.push({
          day: currentDate.getDate().toString().padStart(2, '0'),
          weekday: weekdays[weekdayIndex]
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
}
