import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {
  button: string = "";
  data: number = 0;
  zero: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void {
    this.data++;
  }
  onMinus(): void {
    if (this.data == 1) {
      this.zero = true;
      
    }
    this.data--;
  }

  onPlus(): void {
    if (this.data == 0) {
      this.zero = false;
      
    }
    this.data++;
  }
}
