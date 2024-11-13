import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RoomService } from '../../room.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected to styleUrls
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        transform: 'translateY(20px)',
        opacity: 0
      })),
      transition(':enter', [
        animate('0.6s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class LoginComponent {

  loginObject: any = {
    "userName": '',
    "password": ''
  }

  constructor(private roomServ: RoomService,private router : Router) { }

  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   this.roomServ.login(this.loginObject).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("success");
  //     }
  //   }, error => {
  //     console.error('Login error:', error);
  //   });
  // }

  onSubmit(event: Event)
  {
    event.preventDefault();
    const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers") || "[]");

    const userExists = loggedUsers.some(
      (user : any) =>
        user.userName === this.loginObject.userName &&
        user.password === this.loginObject.password
    );

    if(userExists){
      this.router.navigateByUrl("/dashboard")
      alert("Login success")
    }
    else{
      alert("Login failure")
    }
  }
}
