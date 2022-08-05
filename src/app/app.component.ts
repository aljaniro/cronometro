import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'rxjs';
  visible=true
  ngOnInit(): void {
      this.title = 'Componente creado'
  }
  setvisible(){
    this.visible = !this.visible
  }
  ngOnDestroy(): void {
    this.title = 'Componente Eliminado'
  }
}
