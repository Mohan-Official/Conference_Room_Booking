import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  apiEndPoint : String = "https://freeapi.miniprojectideas.com/api/Annadata/"
  constructor(private http: HttpClient) { }

  login(object : any){
    return this.http.post(this.apiEndPoint + "login",object);
  }

  private dataSignal = signal<any[]>([]);

  get data() {
    return this.dataSignal();
  }

  private dateSignal = signal<string|null>(null)
  get date() {
    return this.dateSignal();
  }

  private timeSignal = signal<any[]>([])
  get time()
  {
    return this.timeSignal()
  }

  private notificationSignal = signal<number|null>(null)
  get notification() {
    return this.notificationSignal();
  }

  setData(value: any[]) {
    this.dataSignal.set(value);
  }

  setDate(value: string){
    this.dateSignal.set(value)
  }

  setTime(value: any[])
  {
    this.timeSignal.set(value)
  }

  setNotification(value: number){
    this.notificationSignal.set(value);
  }
  private bookingsSignal = signal<any[]>([]);

  // Getter for bookings signal
  get bookings() {
    return this.bookingsSignal();
  }

}
