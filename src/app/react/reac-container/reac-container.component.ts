import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, observable, interval, filter, take, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-reac-container',
  templateUrl: './reac-container.component.html',
  styleUrls: ['./reac-container.component.css']
})
export class ReacContainerComponent implements OnInit,OnDestroy {
/*miInterval = interval(1000).pipe(
  map((value)=>value+1),
  filter((value)=> value %2 == 0),take(4))
  misuscripcion : Subscription | null = null*/
  constructor() {
   /* let numero=0
    const miobservable = new Observable<number>((observer)=>{

      setInterval(()=>{

        numero++
        observer.next(numero)

        if(numero == 8){
          observer.error('numero invalido')

        }
      },1000)
    })
       miobservable.subscribe({
         next: (result)=>{
           console.log(result)
         },
         error: (error)=>{
          console.warn(error)
        },
         complete: ()=>{
        console.log('observable completo')
      }})

*/
  }

  ngOnInit(): void {
   /*this.misuscripcion= this.miInterval.subscribe(
     { next: (result)=>{console.log(result)},
       error: (error)=>{console.log(error)},
       complete: ()=>{console.log('proceso completado')}}
    )*/
  }
ngOnDestroy(): void {
/*this.misuscripcion?.unsubscribe()
console.log('componente destruido')
}*/
}}
