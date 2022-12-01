import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "weather", component: WeatherComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
