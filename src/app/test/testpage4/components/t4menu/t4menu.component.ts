import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/services/prices.service';

@Component({
  selector: 'app-t4menu',
  templateUrl: './t4menu.component.html',
  styleUrls: ['./t4menu.component.scss']
})
export class T4menuComponent implements OnInit {
  today: number = Date.now();
  menu1: string = 'Mercimek Çorbası';
  menu2: string = 'Kuru Fasulye';
  menu3: string = 'Pilav';
  menu4: string = 'Ayran';
  menu5: string = 'Künefe';
  usd: any;
  eur: any;
  btc: any;

  prices: any;

  constructor(service: PricesService) {
    this.prices = service.getPrices().subscribe(
      (data)=>{
this.usd = data.USD.satis,
this.eur = data.EUR.satis,
this.btc = data.BTC.satis;
      }
    );
   }

  ngOnInit(): void {
  }

}
