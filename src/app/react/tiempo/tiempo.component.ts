import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
})
export class TiempoComponent implements OnInit {
  hora: number = 0;
  min: number = 0;
  sec: number = 10;
  hab: number = 0;
  x: number = 0;
  interv: any;
  interv1: any;
  interv2: any;
  constructor() {}

  ngOnInit(): void {}
  correr() {
    this.interv = setInterval(() => {
      if (this.sec < 59) {
        this.sec++;
      } else if (this.sec == 59) {
        if (this.min == 59 && this.sec == 59) {
          if (this.hora == 24) {
            this.hora = 0;
            this.min = 0;
            this.sec = 0;
          } else {
            this.hora++;
            this.min = 0;
            this.sec = 0;
          }
        } else {
          this.min++;
          this.sec = 0;
        }
      }
      console.log('segundos', this.sec);
      console.log('minutos', this.min);
    }, 1000);
  }

  stop() {
    clearInterval(this.interv);
    clearInterval(this.interv1);
    clearInterval(this.interv2);
  }
  cinco() {
    console.log('hola');
    this.interv1 = setInterval(() => {
      if (this.sec < 59) {
        if (this.sec == 59) {
          this.sec = 0;
          this.min++;
        }
        if (this.sec + 5 >= 59) {
          if (this.min == 59) {
            if (this.hora == 24) {
              this.hora = 0;
              this.min = 0;
              this.sec = 0;
              this.sec = -5;
            } else {
              this.hora++;
              this.min = 0;
              this.sec = 0;
              this.sec = -5;
              console.log('hola');
            }
          } else {
            this.sec = -5;
            this.min++;
          }
        }
        this.sec = this.sec + 5;
      }
      console.log('segundos', this.sec);
      console.log('minutos', this.min);
    }, 1000);
  }
  menos() {
    console.log('hola');
    this.interv2 = setInterval(() => {
      if (this.sec <= 59) {
        if (this.sec == 1) {
          this.sec = 0;
          this.min--;
        }
        if (this.sec - 5 < 1) {
          if (this.min == 0) {
            if(this.hora==0){
              this.hora=24;
              this.min = 59;
              this.sec = 64;

              console.log('hola');
            }else{this.hora--;
              this.min = 59;
              this.sec = 64;

              console.log('hola');}

          } else {
            this.sec = 64;
            this.min--;
          }
        }
        this.sec = this.sec - 5;
      }
      console.log('segundos', this.sec);
      console.log('minutos', this.min);
    }, 1000);
  }
}
