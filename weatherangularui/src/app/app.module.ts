import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { GuardService } from './guard.service';

export function getToken() {
  return sessionStorage.getItem("userToken");

} 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        allowedDomains: ["localhost:4200","localhost:7286"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


