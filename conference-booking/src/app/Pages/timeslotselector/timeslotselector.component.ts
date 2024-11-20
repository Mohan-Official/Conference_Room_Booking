import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomService } from '../../room.service';

interface TimeSlot {
  id: string;
  visTime: string;
  time: string;
  selected: boolean;
}

@Component({
  selector: 'app-timeslotselector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeslotselector.component.html',
  styleUrls: ['./timeslotselector.component.css']
})
export class TimeslotselectorComponent {
  session1Slots: TimeSlot[] = [
    { id: '1-1', visTime: '7 - 7:30 AM', time: '7 AM', selected: false },
    { id: '1-2', visTime: '7:30 - 8 AM', time: ' ', selected: false },
    { id: '1-3', visTime: '8 - 8:30 AM', time: '8 AM', selected: false },
    { id: '1-4', visTime: '8:30 - 9 AM', time: '', selected: false },
    { id: '1-5', visTime: '9 - 9:30 AM', time: '9 AM', selected: false },
    { id: '1-6', visTime: '9:30 - 10 AM', time: '', selected: false },
    { id: '1-7', visTime: '10 - 10:30 AM', time: '10 AM', selected: false },
    { id: '1-8', visTime: '10:30 - 11 AM', time: '', selected: false },
    { id: '1-9', visTime: '11 - 11:30 AM', time: '11 AM', selected: false },
    { id: '1-10', visTime: '11:30 - 12 AM', time: '', selected: false },
    { id: '1-11', visTime: '12 - 12:30 PM', time: '12 PM', selected: false },
    { id: '1-12', visTime: '12:30 - 1 PM', time: '', selected: false },
    { id: '1-13', visTime: '1 - 1:30 PM', time: '1 PM', selected: false },
    { id: '1-14', visTime: '1:30 - 2 PM', time: '', selected: false },
  ];

  session2Slots: TimeSlot[] = [
    { id: '2-1', visTime: '1 PM', time: '1 PM', selected: false },
    { id: '2-2', visTime: '1:30 PM', time: '', selected: false },
    { id: '2-3', visTime: '2 PM', time: '2 PM', selected: false },
    { id: '2-4', visTime: '2:30 PM', time: '', selected: false },
    { id: '2-5', visTime: '3 PM', time: '3 PM', selected: false },
    { id: '2-6', visTime: '3:30 PM', time: '', selected: false },
    { id: '2-7', visTime: '4 PM', time: '4 PM', selected: false },
    { id: '2-8', visTime: '4:30 PM', time: '', selected: false },
    { id: '2-9', visTime: '5 PM', time: '5 PM', selected: false },
    { id: '2-10', visTime: '5:30 PM', time: '', selected: false },
    { id: '2-11', visTime: '6 PM', time: '6 PM', selected: false },
    { id: '2-12', visTime: '6:30 PM', time: '', selected: false },
    { id: '2-13', visTime: '7 PM', time: '7 PM', selected: false },
    { id: '2-14', visTime: '7:30 PM', time: '', selected: false },
  ];

  selectedSession: string = 'session1';
  selectedSlots: string[] = [];  // Change to string[]

  constructor(private sharedDataService: RoomService) {}

  toggleSlot(slot: TimeSlot) {
    slot.selected = !slot.selected;

    if (slot.selected) {
      this.selectedSlots.push(slot.visTime);  // Push only visTime
      // console.log("Selected slot:", slot.visTime);
    } else {
      this.selectedSlots = this.selectedSlots.filter(s => s !== slot.visTime);  // Remove by visTime
    }

    // console.log("array: ",this.selectedSlots);
    this.sharedDataService.setTime(this.selectedSlots);
  }

  setSession(session: string,event: Event):void {
    event.preventDefault();
    this.selectedSession = session;
  }
}
