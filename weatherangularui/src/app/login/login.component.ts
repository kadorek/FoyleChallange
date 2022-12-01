import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  login(form: NgForm) {

    let data = {
      "username": form.value.username,
      "password": form.value.password

    }

    this.http.post("https://localhost:7286/api/auth/Login", data)
      .subscribe(response => {
        let token = (<any>response).token;
        //console.log(token);
        sessionStorage.setItem("userToken", token);
        this.isLogged = true;
        this.router.navigate(["/"])
      }, err => {
        this.isLogged = false;
        //console.log(err);
      });


  }

}
