import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/services/prices.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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
