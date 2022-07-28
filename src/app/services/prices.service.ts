import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
    

  constructor(private http: HttpClient) { }

  getPrices():Observable<any>{
   console.log('test');
    return this.http.get('https://api.genelpara.com/embed/doviz.json');
  }

 
}

