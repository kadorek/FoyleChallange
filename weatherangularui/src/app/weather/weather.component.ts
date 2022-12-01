import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

   apiUrl: string = "https://localhost:7286/GetCurrentWeatherByLocation";
  cities: any[] = [
    {
      "name": "Adana",
      "plaka": 1
    },
    {
      "name": "Adıyaman",
      "plaka": 2
    },
    {
      "name": "Afyon",
      "plaka": 3
    },
    {
      "name": "Ağrı",
      "plaka": 4
    },
    {
      "name": "Amasya",
      "plaka": 5
    },
    {
      "name": "Ankara",
      "plaka": 6
    },
    {
      "name": "Antalya",
      "plaka": 7
    },
    {
      "name": "Artvin",
      "plaka": 8
    },
    {
      "name": "Aydın",
      "plaka": 9
    },
    {
      "name": "Balıkesir",
      "plaka": 10
    },
    {
      "name": "Bilecik",
      "plaka": 11
    },
    {
      "name": "Bingöl",
      "plaka": 12
    },
    {
      "name": "Bitlis",
      "plaka": 13
    },
    {
      "name": "Bolu",
      "plaka": 14
    },
    {
      "name": "Burdur",
      "plaka": 15
    },
    {
      "name": "Bursa",
      "plaka": 16
    },
    {
      "name": "Çanakkale",
      "plaka": 17
    },
    {
      "name": "Çankırı",
      "plaka": 18
    },
    {
      "name": "Çorum",
      "plaka": 19
    },
    {
      "name": "Denizli",
      "plaka": 20
    },
    {
      "name": "Diyarbakır",
      "plaka": 21
    },
    {
      "name": "Edirne",
      "plaka": 22
    },
    {
      "name": "Elazığ",
      "plaka": 23
    },
    {
      "name": "Erzincan",
      "plaka": 24
    },
    {
      "name": "Erzurum",
      "plaka": 25
    },
    {
      "name": "Eskişehir",
      "plaka": 26
    },
    {
      "name": "Gaziantep",
      "plaka": 27
    },
    {
      "name": "Giresun",
      "plaka": 28
    },
    {
      "name": "Gümüşhane",
      "plaka": 29
    },
    {
      "name": "Hakkari",
      "plaka": 30
    },
    {
      "name": "Hatay",
      "plaka": 31
    },
    {
      "name": "Isparta",
      "plaka": 32
    },
    {
      "name": "İçel (Mersin)",
      "plaka": 33
    },
    {
      "name": "İstanbul",
      "plaka": 34
    },
    {
      "name": "İzmir",
      "plaka": 35
    },
    {
      "name": "Kars",
      "plaka": 36
    },
    {
      "name": "Kastamonu",
      "plaka": 37
    },
    {
      "name": "Kayseri",
      "plaka": 38
    },
    {
      "name": "Kırklareli",
      "plaka": 39
    },
    {
      "name": "Kırşehir",
      "plaka": 40
    },
    {
      "name": "Kocaeli",
      "plaka": 41
    },
    {
      "name": "Konya",
      "plaka": 42
    },
    {
      "name": "Kütahya",
      "plaka": 43
    },
    {
      "name": "Malatya",
      "plaka": 44
    },
    {
      "name": "Manisa",
      "plaka": 45
    },
    {
      "name": "Kahramanmaraş",
      "plaka": 46
    },
    {
      "name": "Mardin",
      "plaka": 47
    },
    {
      "name": "Muğla",
      "plaka": 48
    },
    {
      "name": "Muş",
      "plaka": 49
    },
    {
      "name": "Nevşehir",
      "plaka": 50
    },
    {
      "name": "Niğde",
      "plaka": 51
    },
    {
      "name": "Ordu",
      "plaka": 52
    },
    {
      "name": "Rize",
      "plaka": 53
    },
    {
      "name": "Sakarya",
      "plaka": 54
    },
    {
      "name": "Samsun",
      "plaka": 55
    },
    {
      "name": "Siirt",
      "plaka": 56
    },
    {
      "name": "Sinop",
      "plaka": 57
    },
    {
      "name": "Sivas",
      "plaka": 58
    },
    {
      "name": "Tekirdağ",
      "plaka": 59
    },
    {
      "name": "Tokat",
      "plaka": 60
    },
    {
      "name": "Trabzon",
      "plaka": 61
    },
    {
      "name": "Tunceli",
      "plaka": 62
    },
    {
      "name": "Şanlıurfa",
      "plaka": 63
    },
    {
      "name": "Uşak",
      "plaka": 64
    },
    {
      "name": "Van",
      "plaka": 65
    },
    {
      "name": "Yozgat",
      "plaka": 66
    },
    {
      "name": "Zonguldak",
      "plaka": 67
    },
    {
      "name": "Aksaray",
      "plaka": 68
    },
    {
      "name": "Bayburt",
      "plaka": 69
    },
    {
      "name": "Karaman",
      "plaka": 70
    },
    {
      "name": "Kırıkkale",
      "plaka": 71
    },
    {
      "name": "Batman",
      "plaka": 72
    },
    {
      "name": "Şırnak",
      "plaka": 73
    },
    {
      "name": "Bartın",
      "plaka": 74
    },
    {
      "name": "Ardahan",
      "plaka": 75
    },
    {
      "name": "Iğdır",
      "plaka": 76
    },
    {
      "name": "Yalova",
      "plaka": 77
    },
    {
      "name": "Karabük",
      "plaka": 78
    },
    {
      "name": "Kilis",
      "plaka": 79
    },
    {
      "name": "Osmaniye",
      "plaka": 80
    },
    {
      "name": "Düzce",
      "plaka": 81
    }
  ];



  selectedCity: number = -1;

  weatherData: any;

  constructor(private router: Router, private client: HttpClient) { }

  ngOnInit(): void {
  }

  slcChange(value: number): void {
    console.log(value);
    this.selectedCity = value;
    console.log(this.cities[value - 1].name);
    this.makeApiCall();
  }

  makeApiCall() {
    let query = { "location": this.cities[this.selectedCity - 1].name };
    console.log(query);
    this.client.get(this.apiUrl, { params: query }).subscribe(res => {
      this.weatherData = res;
      console.log(res);
    })


  }



}
