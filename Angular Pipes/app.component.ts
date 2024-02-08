import { Component } from '@angular/core';

import { Observable } from 'rxjs'; 
import {interval} from 'rxjs';
import {map} from 'rxjs';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  template:`
<div style="text-align:left">
<h3>Decimal Pipe</h3>
<p> {{decimalNum1 | number}} </p>
<p> {{decimalNum2 | number}} </p>
</div>`
})
export class AppComponent  implements OnInit{
  presentDate = new Date();
  time$: Observable<Date>;

  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date()));
  }
 
    price: number = 20000;
    decimalNum1: number = 8.7589623;
      decimalNum2: number = 5.43;
      decimalNum3: number = 3.556; 

      Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
      ngOnInit()  { 
      }
      object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}
    }
    a: number = 0.259;
    b: number = 1.3495;
    c: number = 0.300;
      
    }


















