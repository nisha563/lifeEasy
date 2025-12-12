import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router, RouterOutlet } from '@angular/router';
import { increament ,decriment,reset} from '../../State/couter.action';
@Component({
  selector: 'app-counter',
 
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
 public count$: Observable<number> ;
 constructor(private store: Store<{ count: number }>,
  private router:Router
 ){
this.count$ = this.store.select('count');
 }

 increment(){
this.store.dispatch(increament());
 }

 decriment(){
this.store.dispatch(decriment());
 }

 reset(){
this.store.dispatch(reset());
 }
 
 login(){
console.log("login method");
this.router.navigateByUrl('/login');
 }



}
