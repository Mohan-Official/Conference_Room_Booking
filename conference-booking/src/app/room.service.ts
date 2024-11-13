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

  setData(value: any[]) {
    this.dataSignal.set(value);
  }
}
