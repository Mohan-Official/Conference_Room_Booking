import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

interface Person {
  id : number;
  name: string;
  mail: string;
  department: string;
}

@Component({
  selector: 'app-sampleblock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sampleblock.component.html',
  styleUrls: ['./sampleblock.component.css']
})
export class SampleblockComponent implements OnInit {

  people: Person[] = [];
  apiUrl: string = 'http://127.0.0.1:8000/notification';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPeople().subscribe({
      next: (data) => {
        this.people = data;  // Direct assignment
        console.log("People data", this.people);
      },
      error: (err) => {
        console.error('Error fetching people data', err);
      }
    });
  }
  
  

  getPeople(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
