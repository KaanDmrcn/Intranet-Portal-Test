import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2menu',
  templateUrl: './t2menu.component.html',
  styleUrls: ['./t2menu.component.scss']
})
export class T2menuComponent implements OnInit {

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
