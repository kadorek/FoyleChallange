import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isUserLoggedIn() {

    let token: any = sessionStorage.getItem("userToken");
    if (token) {
      return true;
    } else {
      return false;
    }

  }


  logOut() {

    sessionStorage.removeItem("userToken");
    this.router.navigate(["/"]);

  }



}
