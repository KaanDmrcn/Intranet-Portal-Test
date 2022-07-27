import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1menu',
  templateUrl: './t1menu.component.html',
  styleUrls: ['./t1menu.component.scss']
})
export class T1menuComponent implements OnInit {

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
