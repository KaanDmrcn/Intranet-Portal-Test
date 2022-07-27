import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3menu',
  templateUrl: './t3menu.component.html',
  styleUrls: ['./t3menu.component.scss']
})
export class T3menuComponent implements OnInit {

  today: number = Date.now();
  menu1: string = 'Mercimek Çorbası';
  menu2: string = 'Kuru Fasulye';
  menu3: string = 'Pilav';
  menu4: string = 'Ayran';
  menu5: string = 'Künefe';

  constructor() { }

  ngOnInit(): void {
  }

}
