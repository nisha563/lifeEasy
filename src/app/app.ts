import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { AsyncPipe } from '@angular/common';
import { counterReducer } from '../State/counter.reducer';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Counter,AsyncPipe, ReactiveFormsModule],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lifeEasy');

  
}
