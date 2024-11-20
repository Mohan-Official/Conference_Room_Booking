import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-listconferenec',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './listconferenec.component.html',
  styleUrl: './listconferenec.component.css'
})
export class ListconferenecComponent {
  listConfRoom : { ConferenceImg: string, ConferenceName: string, ConferenceDesc: string }[] = [
    {
      "ConferenceImg":"ConferenceRoom Images/Conf2.jpg",
      "ConferenceName":"Wankhede",
      "ConferenceDesc":"2 Members - 1 White Board 4 Power Socket"
    },
    {
      "ConferenceImg" : "ConferenceRoom Images/Conf3.jpeg",
      "ConferenceName":"St Andrews",
      "ConferenceDesc":"10 - 16 Members - 1 White Board /n 8 Power Socket | 1 Projector"
    },
    {
      "ConferenceImg":"ConferenceRoom Images/Conf4.jpg",
      "ConferenceName":"Phone Booth 3",
      "ConferenceDesc":"2 - 4 Members - 1 White Board /n 4 Power Sockets"
    },
    {
      "ConferenceImg" : "ConferenceRoom Images/Conf5.jpg",
      "ConferenceName":"Phone Booth 1",
      "ConferenceDesc":"3 - 6 Members - 1 White Board /n 4 Power Sockets"
    }
  ]

  constructor(private sharedDataService : RoomService){}

  bookRoom(room : any){
    const selectedRoomArray = [room];
    this.sharedDataService.setData(selectedRoomArray)
    // alert('booked')
  }
}
