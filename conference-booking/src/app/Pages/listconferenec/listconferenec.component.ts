import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RoomService } from '../../room.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import e from 'express';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listconferenec',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './listconferenec.component.html',
  styleUrl: './listconferenec.component.css'
})
export class ListconferenecComponent implements OnInit {
  // listConfRoom : { ConferenceImg: string, ConferenceName: string, ConferenceDesc: string }[] = [
  //   {
  //     "ConferenceImg":"ConferenceRoom Images/Conf2.jpg",
  //     "ConferenceName":"Wankhede",
  //     "ConferenceDesc":"2 Members - 1 White Board 4 Power Socket"
  //   },
  //   {
  //     "ConferenceImg" : "ConferenceRoom Images/Conf3.jpeg",
  //     "ConferenceName":"St Andrews",
  //     "ConferenceDesc":"10 - 16 Members - 1 White Board /n 8 Power Socket | 1 Projector"
  //   },
  //   {
  //     "ConferenceImg":"ConferenceRoom Images/Conf4.jpg",
  //     "ConferenceName":"Phone Booth 3",
  //     "ConferenceDesc":"2 - 4 Members - 1 White Board /n 4 Power Sockets"
  //   },
  //   {
  //     "ConferenceImg" : "ConferenceRoom Images/Conf5.jpg",
  //     "ConferenceName":"Phone Booth 1",
  //     "ConferenceDesc":"3 - 6 Members - 1 White Board /n 4 Power Sockets"
  //   }
  // ]

  apiUrl: string = 'http://127.0.0.1:8000/conf/conference-list'

  constructor(private sharedDataService : RoomService, private http: HttpClient){
  }

  roomsData : any[] = []

  ngOnInit(): void {
    this.fetchData().subscribe({
      next: (data) =>{
        this.roomsData = data.result
        console.log("From API:",this.roomsData)
      },
      error: (err) =>{
        console.log("Error fetching:",err)
      }
    })
  }

  fetchData(): Observable<any>
  {
    return this.http.get<any>(this.apiUrl);
  }

  bookRoom(room : any){
    const selectedRoomArray = [room];
    // alert(room.roomname)
    this.sharedDataService.setData(selectedRoomArray)
    // alert('booked')
  }
}
