import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
