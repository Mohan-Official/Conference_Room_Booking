import { Component, OnInit, Signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RoomService } from '../../room.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatBadgeModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // receivedNotification = computed(() => this.roomService.notification);
  // notCount : number = 0;
  apiUrl : string = "http://127.0.0.1:8000/notificationDetails"
  count : number = 0;
  ngOnInit(): void {
    this.getNotificationDetails().subscribe({
      next: (data) => {
        this.count = data.count;  // Direct assignment
        console.log("People data", data.count);
      },
      error: (err) => {
        console.error('Error fetching people data', err);
      }
    });
  }

  getNotificationDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  constructor(private roomService: RoomService, private http: HttpClient) {
    
    
    effect(() => {
      // const notificationCount = this.receivedNotification() || '';
      // const bookingItem = localStorage.getItem("bookings");
    
      // if (bookingItem) {
      //   try {
      //     const bookingsArray = JSON.parse(bookingItem);
      //     this.notCount = bookingsArray.length
      //   } catch (error) {
      //     console.error("Error parsing bookings from localStorage:", error);
      //   }
      // } else {
      //   console.log("No bookings found in localStorage.");
      // }
    
      // console.log("received noti:", notificationCount);
      // console.log('hi');
    });
    
  }

}
